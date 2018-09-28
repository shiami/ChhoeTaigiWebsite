import React, { Component } from 'react';
import { logPageView } from '../api/analytics';
import { withRouter } from 'react-router-dom';
import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import { withCookies } from 'react-cookie';

import { getLocale } from '../api/locale';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);

        const { cookies } = props;

        props.initialize({
            languages: [
                { name: "Hoabun", code: "hb" },
                { name: "Taibun", code: "tb" },
                { name: "Pe̍h-ōe-jī", code: "po" },
            ],
            options: { 
                renderToStaticMarkup,
                defaultLanguage: getLocale(cookies),
            }
        });
    }

    componentDidMount() {
        logPageView();
    }

    componentDidUpdate() {
        logPageView();
    }

    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default withCookies(withLocalize(withRouter(App)));