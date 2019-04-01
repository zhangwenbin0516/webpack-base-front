import 'babel-polyfill'
import ReactDom from 'react-dom'
import pages from 'page/'
import 'assets/sass/pages.scss'

ReactDom.render(
    <pages />,
    document.getElementById('root')
)