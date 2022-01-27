import React from 'react';
import 'App.scss';
import { ApiClient, ApiProvider } from 'jsonapi-react';
import schema from './schema/schema';
import AppRouter from 'routes/Route';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ConfigProvider } from 'antd';
import esES from 'antd/lib/locale/es_ES';

function App() {
    let token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).access_token : undefined;
    let options = {
        url: process.env.REACT_APP_API_URL + process.env.REACT_APP_API_VERSION,
        schema: schema,
    }
    
    if (token) {
        options['headers'] = {'Authorization': 'Bearer ' + token};
    }

    const client = new ApiClient(options);

    return (
        <ConfigProvider locale={esES}>
            <ApiProvider client={client}>
                <Provider
                    store={store}
                >
                    <AppRouter></AppRouter>
                </Provider>
            </ApiProvider>
        </ConfigProvider>
    );
}

export default App;
