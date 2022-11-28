import { DynamicFeed } from './Components.jsx'

const data = {
  body: [
    {
      _uid: 'BUY6Drn9e1',
      component: 'video',
      data: {
        title: 'Video title',
        url: 'https://www.youtube.com/embed/GNrdg3PzpJQ',
      },
    },
    {
      _uid: 'gJZoSLkfZV',
      component: 'image',
      data: {
        title: 'Image title',
        url: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
      },
    },
    {
      _uid: 'X1JAfdsZxy',
      component: 'text',
      data: {
        title: 'Text title',
        text: `
            <h2>Header 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti dolore aliquid sint, ullam amet et cumque deserunt, quos voluptas, excepturi expedita eaque enim ipsa id doloremque nisi voluptatem quasi.</p>
            <h3>Header 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti dolore aliquid sint, ullam amet et cumque deserunt, quos voluptas, excepturi expedita eaque enim ipsa id doloremque nisi voluptatem quasi.</p>
            <table>
            <thead>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Body 1</td>
                    <td>Body 2</td>
                </tr>
            </tbody>
          </table>
        `,
      },
    },
  ],
}

export function DynamicContent() {
  return (
    <>
      <h1 className="text-xl mb-5">DynamicContent Example</h1>
      <div className="space-y-10">
        {data.body.map((block) => DynamicFeed(block))}
      </div>
    </>
  )
}
