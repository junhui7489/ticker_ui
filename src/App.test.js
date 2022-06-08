import { render, screen, waitFor } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import App from './App';
import ButtonAppBar from './components/Appbar';
import Table from './components/Table';
import mockData from './test/mockData.json'
import source1Data from './test/source1Data.json';
import source2Data from './test/source2Data.json';
import source3Data from './test/source3Data.json';
import testSourcesData from './test/testSources.json';
import testTickersData from './test/testTickers';
import  Source1Provider  from './contexts/Source1Context';
import Source2Provider from './contexts/Source2Context';
import Source3Provider from './contexts/Source3Context';
import UseSourcesProvider from './contexts/useSourcesContext';
import UseTickerProvider from './contexts/useTickerContext';
import index from './index';


describe('Application bar', ()=>{
  test('Logo text', ()=> {
    render(
      <ButtonAppBar/>,
    )
    const linkElement = screen.getByText("LOGO");
    expect(linkElement).toBeInTheDocument();
  })

  test('Picture', ()=>{
    render(
      <ButtonAppBar/>,
    )
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'logo-social.png');
    expect(logo).toHaveAttribute('alt', 'Logo');
  })
})


describe('Table', ()=> {
  test('Time text', ()=> {
    const tickerName = "goog";
    const sourceName = "SRC1";
    let test = mockData
    render(
      <Table data={test} sourceName={sourceName} tickerName={tickerName}></Table>,
    )
    const linkElement = screen.getByText("Time");
    expect(linkElement).toBeInTheDocument();
  })

  test('Price text', ()=> {
    const tickerName = "goog";
    const sourceName = "SRC1";
    let test = mockData
    render(
      <Table data={test} sourceName={sourceName} tickerName={tickerName}></Table>,
    )
    const linkElement = screen.getByText("Price");
    expect(linkElement).toBeInTheDocument();
  })

  test('if data length less than or equal to 5', ()=> {
    const tickerName = "goog";
    const sourceName = "SRC1";
    let test = mockData.slice(-5);
    render(
      <Table data={test} sourceName={sourceName} tickerName={tickerName}></Table>,
    )
    const linkElement = screen.getByText("Price");
    expect(linkElement).toBeInTheDocument();
  })

})

describe('Main Page test', ()=> {  
  let container = null;
  beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
  test('context snapshot testing', () => {
    let test = mockData
    jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(test)
    })
    );
    act(() => {
      render(      
      <UseSourcesProvider>
      <UseTickerProvider>
        <Source1Provider>
          <Source2Provider>
            <Source3Provider>
            <App/>
            </Source3Provider>
          </Source2Provider>
        </Source1Provider>
      </UseTickerProvider>
    </UseSourcesProvider>, container
        )
      
      // render components
    });


    const linkElement = screen.getAllByText("Ticker");
    expect(linkElement).toMatchSnapshot();
  });

  test('Price Source text exists snapshot testing', () => {
    let test = mockData
    jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(test)
    })
    );
    act(() => {
      render(      
      <UseSourcesProvider>
      <UseTickerProvider>
        <Source1Provider>
          <Source2Provider>
            <Source3Provider>
            <App/>
            </Source3Provider>
          </Source2Provider>
        </Source1Provider>
      </UseTickerProvider>
    </UseSourcesProvider>, container
        )
      
      // render components
    });
    const linkElement = screen.getAllByText("Price Source:");
    expect(linkElement).toMatchSnapshot();
  });

  test('dropdown option exists snapshot testing', () => {
    let test = mockData;
    jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(test)
    })
  );

  act(() => {
    render(      
    <UseSourcesProvider>
    <UseTickerProvider>
      <Source1Provider>
        <Source2Provider>
          <Source3Provider>
          <App/>
          </Source3Provider>
        </Source2Provider>
      </Source1Provider>
    </UseTickerProvider>
  </UseSourcesProvider>, container
      )
    
    // render components
  });
    const dropdownButton = screen.getAllByRole('combobox')
    
    expect(dropdownButton.length).toEqual(2) // it exist
  });

  it('Ticker text exists or not', async() => {

    const source1Context = source1Data['updated_src1'];
    const source2Context = source2Data['updated_src2'];
    const source3Context = source3Data['updated_src3'];
    const getTickersContext = testTickersData['list'];
    const getSourcesContext = testSourcesData['list'];
    jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(getSourcesContext)
    })
    );
    jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(getTickersContext)
    })
    );

    render(
        <UseSourcesProvider value={getSourcesContext}>
        <UseTickerProvider value={getTickersContext}>
          <Source1Provider value={source1Context}>
            <Source2Provider value={source2Context}>
              <Source3Provider value={source3Context}>
              <App/>
              </Source3Provider>
            </Source2Provider>
          </Source1Provider>
        </UseTickerProvider>
      </UseSourcesProvider>, container
    )

    await waitFor(() => {
      const element = screen.getByText("Ticker")
  
      expect(element).toBeInTheDocument();
    });
    
  });

})


describe('root test', ()=> {  
  it("Should render app without crashing", () => {
    expect(
        JSON.stringify(
          Object.assign({}, index, { _reactInternalInstance: 'censored' }),
        ),
      ).toMatchSnapshot();
});

})
