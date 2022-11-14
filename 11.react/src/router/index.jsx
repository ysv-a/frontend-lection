import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { FormPage } from '../views/formExample/FormPage'
import { MemoRecursiveNode } from '../views/MemoRecursiveNode'
import {
  CalculateFactorial,
  MemoComponentExample,
} from '../views/MemoPlayground'
import { LazyInitialization } from '../views/LazyInitialization'
import { ExampleForwardRef } from '../views/ExampleForwardRef'
import { UseEffectBasics } from '../views/UseEffectBasics'
import { CollbackMemoExample } from '../views/CollbackMemoExample'
import { UseContextExample } from '../views/provide-inject/UseContextExample'
import { FetchDataInUseEffect } from '../views/FetchDataInUseEffect'
import OrderedListExampleKey from '../views/OrderedListExampleKey/OrderedListExampleKey'
import { TablePageCustom } from '../views/Table/TablePageCustom'
import { RenderPropExample } from '../views/RenderPropExample'
import { DynamicContent } from '../views/Dynamic/DynamicContent'
import { CssExample1 } from '../views/CssExample/1/CssExample1'
import { CssExample2 } from '../views/CssExample/2/CssExample2'
import { CssExample3 } from '../views/CssExample/3/CssExample3'
import { CssExample4 } from '../views/CssExample/4/CssExample4'
import { CssExample11 } from '../views/CssExample/1-1/CssExample11'
import { CssExample5 } from '../views/CssExample/5/CssExample5'
import { CssExample6 } from '../views/CssExample/6/CssExample6'
import { HigherOrderComponent } from '../views/HigherOrderComponent'
import { CompositionExample } from '../views/Composition'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/LazyInitialization',
        element: <LazyInitialization />,
      },
      {
        path: '/UseEffectBasics',
        element: <UseEffectBasics />,
      },
      {
        path: '/FetchDataInUseEffect',
        element: <FetchDataInUseEffect />,
      },
      {
        path: '/ExampleForwardRef',
        element: <ExampleForwardRef />,
      },
      {
        path: '/FormPageExample',
        element: <FormPage />,
      },
      {
        path: '/CollbackMemoExample',
        element: <CollbackMemoExample />,
      },
      {
        path: '/MemoRecursiveNode',
        element: <MemoRecursiveNode />,
      },
      {
        path: '/CalculateFactorial',
        element: <CalculateFactorial />,
      },
      {
        path: '/MemoComponentExample',
        element: <MemoComponentExample />,
      },
      {
        path: '/ReactContext',
        element: <UseContextExample />,
      },
      {
        path: '/OrderedListExampleKey',
        element: <OrderedListExampleKey />,
      },
      {
        path: '/CustomTable',
        element: <TablePageCustom />,
      },
      {
        path: '/RenderPropExample',
        element: <RenderPropExample />,
      },
      {
        path: '/DynamicContentExample',
        element: <DynamicContent />,
      },
      {
        path: '/CssExample1',
        element: <CssExample1 />,
      },
      {
        path: '/CssExample2',
        element: <CssExample2 />,
      },
      {
        path: '/CssExample3',
        element: <CssExample3 />,
      },
      {
        path: '/CssExample4',
        element: <CssExample4 />,
      },
      {
        path: '/CssExample11',
        element: <CssExample11 />,
      },
      {
        path: '/CssExample5',
        element: <CssExample5 />,
      },
      {
        path: '/CssExample6',
        element: <CssExample6 />,
      },
      {
        path: '/HigherOrderComponent',
        element: <HigherOrderComponent />,
      },
      {
        path: '/CompositionExample',
        element: <CompositionExample />,
      },
    ],
  },
])

export default router
