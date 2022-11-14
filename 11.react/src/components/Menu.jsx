import { Link } from 'react-router-dom'

export function Menu() {
  return (
    <nav>
      <ul className="flex flex-col gap-5 font-bold">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/LazyInitialization`}>useState - LazyInitialization</Link>
        </li>
        <li>
          <Link to={`/UseEffectBasics`}>useEffect - UseEffectBasics</Link>
        </li>
        <li>
          <Link to={`/FetchDataInUseEffect`}>useEffect - FetchData</Link>
        </li>
        <li>
          <Link to={`/ExampleForwardRef`}>Ref</Link>
        </li>
        <li>
          <Link to={`/CollbackMemoExample`}>useCollback - MemoExample</Link>
        </li>
        <li>
          <Link to={`/CalculateFactorial`}>useMemo - CalculateFactorial</Link>
        </li>
        <li>
          <Link to={`/MemoComponentExample`}>
            useMemo - MemoComponentExample
          </Link>
        </li>
        <li>
          <Link to={`/ReactContext`}>useContext</Link>
        </li>
        <li>
          <Link to={`/OrderedListExampleKey`}>Key work - example</Link>
        </li>
        <li>
          <Link to={`/FormPageExample`}>FormPageExample</Link>
        </li>
        <li>
          <Link to={`/CustomTable`}>CustomTable</Link>
        </li>
        <li>
          <Link to={`/RenderPropExample`}>RenderPropExample</Link>
        </li>
        <li>
          <Link to={`/DynamicContentExample`}>DynamicContentExample</Link>
        </li>
        <li>
          <Link to={`/CssExample1`}>CssExample1 - module</Link>
        </li>
        <li>
          <Link to={`/CssExample2`}>CssExample2 - module - classnames</Link>
        </li>
        <li>
          <Link to={`/CssExample3`}>CssExample3 - simple css</Link>
        </li>
        <li>
          <Link to={`/CssExample4`}>CssExample4 - leak css</Link>
        </li>
        <li>
          <Link to={`/CssExample11`}>CssExample11 - leak(none) - modules</Link>
        </li>
        <li>
          <Link to={`/CssExample5`}>CssExample5 - bem - scss </Link>
        </li>
        <li>
          <Link to={`/CssExample6`}>CssExample6 - styled-components</Link>
        </li>
        <li>
          <Link to={`/HigherOrderComponent`}>HigherOrderComponent</Link>
        </li>
        <li>
          <Link to={`/CompositionExample`}>CompositionExample</Link>
        </li>
      </ul>
    </nav>
  )
}
