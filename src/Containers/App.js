
/* React */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

/* Config */
//import Config from '../../config'

/* Actions */
import Actions from '../Actions/Creators'

/* Selectors */
import { getApp } from '../Selectors/CmsSelector'
//import { getMe, AuthActions } from 'boosh-react-auth'

/* Sagas */
import GetCmsAppSaga from '../Sagas/Preloaders/GetCmsAppSaga'

/* Components */
import { Row, Column } from 'react-foundation'
import { Layout } from 'boosh-react-components'

class App extends React.Component {

  getData(appId) {
    this.props.dispatch(Actions.getCmsAppAttempt({ appId: appId }));
  }

  componentDidMount() {

    // get cms app data
    //this.getData(Config.cms.appId);
    this.getData('example');

    // auto login
    if (typeof window != "undefined") {
      let accessToken = window.localStorage.getItem('accessToken') || null;

      //accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVkYWU3MDFmM2UzMGFiMDc2NDFmNzU2YWU3OTA4ZmRmZGEwYTFiYjYzZDg4ZWQ1ZmMzMGQyYjQ3NjVlZDI2NTY3OTRiZTBmMzc4MzQ0MmNlIn0.eyJhdWQiOiIyIiwianRpIjoiNWRhZTcwMWYzZTMwYWIwNzY0MWY3NTZhZTc5MDhmZGZkYTBhMWJiNjNkODhlZDVmYzMwZDJiNDc2NWVkMjY1Njc5NGJlMGYzNzgzNDQyY2UiLCJpYXQiOjE0OTI5MDEyMTksIm5iZiI6MTQ5MjkwMTIxOSwiZXhwIjoxNTI0NDM3MjE5LCJzdWIiOiIyIiwic2NvcGVzIjpbImJhc2ljIl19.TAgsiWs2pAsA6x8AcVZC2TmyAKgIHkx9oPQ9g2i6CYuQge-I9IN78poTUes3va0spGULHGLIxu3iyGyw2mGsxSJkzBVocIfkViNyeKVtBUUJd9iXPjZaaGsJrbQSaL0Y864es05Ew2wSE0XXpn_cuuTxPi_d_X26CyLCeuf0dvXTSNLnQ-DdfqvWKaAwrIApaQy3AkrKmjcKmIMZBxZSZ2lpRjSef-ZxkQXx4Rxhr106GPSMMgZ8mSO4jODLPXxMtj8qD82K6pYBVWosHMINqgeEZaSqvESASx7EZVLtmxwi63iwvq_7jGkKx7qfA4fL9nfnWSbHFbk31fulzKCvKfkm6ES07XSAHu7wiezBSZEtBHLnbBjjHZX5VjZee06ou4j81OOgOAPqvkMbDXDOML_FJHUpULNj1SwcIwvdydDWrvgp2-MOABcggM1JcHefGFh3JuCOEH1HUWFP_sUs9pic7OxNXlfYs5jnbezVJiuj-crA9p-veMGyk_U7stNxymRq1pbrQ6K4WrRDnJQw92iWO-PmK7mx3R9XJy9MgEPKU_bNUwS_O8tG8OfkXcplpGZpG8d_EG7pfE5bqMvOr7trsqqlz5AngHkuWioGoxVYK0yQp86vyVf5WHD_v7Tryq9GvSDxtvSdFyaBthfIWfpQ-jsswLPFxFMsujm9aWo"

      //let username = window.localStorage.getItem('username') || null;
      //console.log('APP START',username, accessToken)
      /*if (accessToken && accessToken != "undefined" && username && username != "undefined") {
        this.props.dispatch(AuthActions.getMe({ username: username, accessToken: accessToken }));
      }*/
      if (accessToken && accessToken != "undefined") {
        //this.props.dispatch(AuthActions.getMe({ accessToken: accessToken }));
      }
    }

    // test
    //this.props.dispatch(Actions.getActivityAttempt(null, null, null));
    //this.props.dispatch(Actions.getNotificationsAttempt(null, null, null));
    //this.props.dispatch(Actions.getCnnAttempt('TopStories'));

    /*const temp = yield select((state) => state.weather.temperature)
    // only fetch new temps when we don't have one yet
    if (!R.is(Number, temp)) {
      yield put(Actions.getTemperatureAttempt('Los Angeles'))
    }*/
  }

  render() {
    if (!this.props.app) {
      return (
        <div><img className="loading" src={"/cdn/img/loading.gif"}/></div>
      )
    }
    let meta = this.props.app.meta || {}
    // remove Unknown props to avoid React Warnings
    const { app, dispatch, history, location, params, route, routes, routeParams, ...rest } = this.props
    return (
      <Layout app={app}>
        <Helmet
          htmlAttributes={{"lang": "en", "amp": undefined}}
          title={meta.defaultTitle}
          titleTemplate={meta.title + ' - %s'}
          defaultTitle={meta.defaultTitle}
          meta={[...meta.properties]} />
        <div className="app" {...rest}/>
      </Layout>
    );
  }

}

const mapStateToProps = (state, props) => {
  return {
    app: getApp(state, props)
  }
}

function preload(params, req) {
  return [
    [GetCmsAppSaga, { appId: Config.cmsId}]
  ]
}
App.preload = preload

export default connect(mapStateToProps)(App)
