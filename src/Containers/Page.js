
/* React */
import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

/* Actions */
import Actions from '../Actions/Creators'

/* Selectors */
import { getAppId, getPageKey, getPageData, getPageMarkdown } from '../Selectors/CmsSelector'

/* Sagas */
import GetCmsPageSaga from '../Sagas/Preloaders/GetCmsPageSaga'
import GetCmsMarkdownSaga from '../Sagas/Preloaders/GetCmsMarkdownSaga'

/* Components */
import { Row, Column } from 'react-foundation'
import Markdown from 'react-remarkable'
import {
  Portlet,
  BlockGrid,
  List,
  //DataGrid,
  Carousel,
  //JsonForm,
  Nav,
  //Gallery
} from 'boosh-react-components'

class Page extends React.Component {

  getData(appId, pageKey) {
    if (!appId || !pageKey) return false;

    let Meta = {
      appId: appId,
      pageId: pageKey
    }
    this.props.dispatch(Actions.getCmsPageAttempt(Meta));
    this.props.dispatch(Actions.getCmsMarkdownAttempt(Meta));
  }

  componentDidMount() {
    let { appId, pageKey } = this.props;
    console.log('pageKey',pageKey);
    this.getData(appId, pageKey)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.pageKey !== this.props.pageKey) {
      this.getData(newProps.appId, newProps.pageKey)
    }
  }

  renderPortlet = (data) => {
    let cont = data.items || '';
    let className = data.className || '';

    if (!cont.component) {
      return (
        <Portlet className={className} title={data.title || ''} cont={cont} />
      )
    }

    switch(cont.component) {
      case 'markdown':
        let html = this.props.markdown;
        return (
          <Portlet className={className} title={data.title || ''} items={
            <Markdown source={html} />
          } />
        )
      break;
      /*case 'datagrid':
        return (
          <Portlet className={className} title={data.title || ''} items={
            <DataGrid/>
          } />
        )
      break;*/
      case 'blockgrid':
        return (
          <Portlet className={className} title={data.title || ''} items={
            <BlockGrid data={cont.data} />
          } />
        )
      break;
      case 'list':
        return (
          <Portlet className={className} title={data.title || ''} items={
            <List itemType={cont.itemType} data={cont.data}/>
          } />
        )
      break;
      case 'carousel':
        return (
          <Portlet className={className} title={data.title || ''} items={
            <Carousel slides={cont.slides || ''}/>
          } />
        )
      break;
      case 'nav':
        if (!cont.data) return false;
        if (!cont.data.items) return false;
        return (
          <Portlet className={className} title={data.title || ''} items={
            <Nav isVertical={cont.data.isVertical} items={cont.data.items} />
          } />
        )
      break;
      /*case 'form':
        if (!cont.data) return false;
        return (
          <Portlet className={className} title={data.title || ''} items={
            <JsonForm
              schema={cont.data.schema}
              uiSchema={cont.data.uiSchema}
              formData={cont.data.formData}
              buttons = {cont.buttons} />
          } />
        )
      break;
      case 'gallery':
        return (
          <Portlet className={className} title={data.title || ''} items={
            <Gallery items={cont.items || ''}/>
          } />
        )
      break;*/
      default:
        return false;
      break;
    }
  }

  renderRow = (data) => {
    if (!data) return false;
    if (!data.portlets) return false;
    const z = this;
    return (
      <Row className="display">
        <Column small={12}>{
          data.portlets.map((item,id) => {
            return (<div key={id}>{ z.renderPortlet(item) }</div>)
          })
        }</Column>
      </Row>
    )
  }

  renderColumns = (dataLeft, dataCenter, dataRight) => {
    const z = this;

    // error checking
    dataLeft = dataLeft && dataLeft.portlets ?  dataLeft : { portlets: null }
    dataCenter = dataCenter && dataCenter.portlets ?  dataCenter : { portlets: null }
    dataRight = dataRight && dataRight.portlets ?  dataRight : { portlets: null }

    /* cases
      000
      100
      110
      101
      111
      010
      011
      001
    */

    if (!dataLeft && !dataCenter && !dataRight) return false;

    if (dataLeft.portlets && !dataCenter.portlets && !dataRight.portlets) {
      return (
        <Row className="display">
          <Column small={12}>{
            dataLeft.portlets.map((item,id) => {
              return (<div key={id}>{ z.renderPortlet(item) }</div>)
            })
          }</Column>
        </Row>
      )
    }

    if (dataLeft.portlets && dataCenter.portlets && !dataRight.portlets) {
      return (
        <Row className="display">
          <Column small={4}>{
            dataLeft.portlets.map((item,id) => {
              return (<div key={id}>{ z.renderPortlet(item) }</div>)
            })
          }</Column>
          <Column small={8}>{
            dataCenter.portlets.map((item,id) => {
              return (<div key={id}>{ z.renderPortlet(item) }</div>)
            })
          }</Column>
        </Row>
      )
    }

    if (dataLeft.portlets && !dataCenter.portlets && dataRight.portlets) {
      return (
        <Row className="display">
          <Column small={6}>{
            dataLeft.portlets.map((item,id) => {
              return (<div key={id}>{ z.renderPortlet(item) }</div>)
            })
          }</Column>
          <Column small={6}>{
            dataRight.portlets.map((item,id) => {
              return (<div key={id}>{ z.renderPortlet(item) }</div>)
            })
          }</Column>
        </Row>
      )
    }

    if (dataLeft.portlets && dataCenter.portlets && dataRight.portlets) {
      return (
        <Row className="display">
          <Column small={3}>{
            dataLeft.portlets.map((item,id) => {
              return (<div key={id}>{ z.renderPortlet(item) }</div>)
            })
          }</Column>
          <Column small={6}>{
            dataCenter.portlets.map((item,id) => {
              return (<div key={id}>{ z.renderPortlet(item) }</div>)
            })
          }</Column>
          <Column small={3}>{
            dataRight.portlets.map((item,id) => {
              return (<div key={id}>{ z.renderPortlet(item) }</div>)
            })
          }</Column>
        </Row>
      )
    }

    if (!dataLeft.portlets && dataCenter.portlets && !dataRight.portlets) {
      return (
        <Row className="display">
          <Column small={12}>{
            dataCenter.portlets.map((item,id) => {
              return (<div key={id}>{ z.renderPortlet(item) }</div>)
            })
          }</Column>
        </Row>
      )
    }

    if (!dataLeft.portlets && dataCenter.portlets && dataRight.portlets) {
      return (
        <Row className="display">
          <Column small={8}>{
            dataCenter.portlets.map((item,id) => {
              return (<div key={id}>{ z.renderPortlet(item) }</div>)
            })
          }</Column>
          <Column small={4}>{
            dataRight.portlets.map((item,id) => {
              return (<div key={id}>{ z.renderPortlet(item) }</div>)
            })
          }</Column>
        </Row>
      )
    }

    if (!dataLeft.portlets && !dataCenter.portlets && dataRight.portlets) {
      return (
        <Row className="display">
          <Column small={12}>{
            dataRight.portlets.map((item,id) => {
              return (<div key={id}>{ z.renderPortlet(item) }</div>)
            })
          }</Column>
        </Row>
      )
    }

    return false;
  }

  render() {

    let { data } = this.props;
    if (!data) return false;

    let title = (data.meta) ? data.meta.title : "";

    return (
      <div className="page">
        <Helmet title={title}/>
        { this.renderRow(data.top) }
        { this.renderColumns(data.left, data.center,  data.right) }
        { this.renderRow(data.bottom) }
      </div>
    );
  }

}

const mapStateToProps = (state, props) => {
  return {
    appId: getAppId(state, props),
    pageKey: getPageKey(state, props),
    data: getPageData(state, props),
    markdown: getPageMarkdown(state, props)
  }
}

function preload(params, req) {
  const meta = { appId: 'example', pageId: req.originalUrl.slice(1) }
  return [
    [GetCmsPageSaga, meta],
    [GetCmsMarkdownSaga, meta]
  ];
 }
Page.preload = preload;

export default connect(mapStateToProps)(Page)



