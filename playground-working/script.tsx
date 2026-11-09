import React from 'https://esm.sh/react@18'
import ReactDOM from 'https://esm.sh/react-dom@18/client'

// 🐨 replace the "Hello World" with createElement calls that creates
// a span with the text "Hello" and another span with the text "World"
// also, you'll need to add a space string (" ") between the spans

// 🐨 re-create this with createElement and assign that to the element variable
// <div class="container">
// 	<p>Here's Sam's favorite food:</p>
// 	<ul class="sams-food">
// 		<li>Green eggs</li>
// 		<li>Ham</li>
// 	</ul>
// </div>

const rootElement = document.getElementById('root')

// const p = React.createElement('p', null, "Here's Sam's favorite food:")
// const list1 = React.createElement('li', null, 'Green eggs')
// const list2 = React.createElement('li', null, 'Ham')
// const ul = React.createElement('ul', null, [list1, list2])

// const children = 'Hello World'
// const className = 'container'
// // const element = `${<div className={}></div>}`
// const element = <div className={className}>{children}</div>

const children = 'Hello World'
const className = 'container'
const props = { children, className }
// 🐨 get this props object spread onto the div element
// const element = <div {...props}></div>

// const element = (
// 	<div className="container">
// 		<p>Here's Sam's favorite food:</p>
// 		<ul className="sams-food">
// 			<li>Green eggs</li>
// 			<li>Ham</li>
// 		</ul>
// 	</div>
// )

// const message = (props) => {
// 	console.log(props)
// 	return <div className="message">{props.children}</div>
// }

// const element = (
// 	<>
// 		{message({ children: 'Hello World' })}
// 		{message({ children: 'Goodbye World' })}
// 		{React.createElement(message, null, 'Hello World2')}
// 		{React.createElement(message, null, 'Goodbye World2')}
// 		<message>Hello World</message>
// 		<message>Goodbye World</message>
// 	</>
// )
const operations = {
	"+": (left: number, right: number): number => left + right,
	"-": (left: number, right: number): number => left - right,
	"*": (left: number, right: number): number => left * right,
	"/": (left: number, right: number): number => left / right,
	"**": (left: number, right: number): number => left ** right,
	"%": (left: number, right: number): number => left % right,
}
type CalculatorProps = { left: number, right: number, operator: keyof typeof operations }
function Calculator({ left, operator, right }: CalculatorProps) {
	return <div>
		<code>
			{left} {operator} {right} = {operations[operator](left, right)}
		</code>
	</div>
}
const element = <>
	<Calculator left={3} operator='*' right={32} />
	<Calculator left={2} operator='+' right={43} />
	<Calculator left={64} operator='*' right={32} />
	<Calculator left={2} operator='/' right={432} />
	<Calculator left={2} operator='**' right={432} />
	<Calculator left={2} operator='%' right={432} /> 
</>
console.log(element)
const container = React.createElement('div', null, element)

const root = ReactDOM.createRoot(rootElement)
root.render(container)
