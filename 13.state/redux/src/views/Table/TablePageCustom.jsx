import { Table } from './Table'

const rows = [
  { id: '1', name: 'David', gender: 'Male', age: '17', height: '176' },
  { id: '2', name: 'Kelly', gender: 'Female', age: '19', height: '180' },
  { id: '3', name: 'James', gender: 'Male', age: '12', height: '150' },
  { id: '4', name: 'Tim', gender: 'Male', age: '39', height: '180' },
  { id: '5', name: 'Sam', gender: 'Male', age: '49', height: '176' },
  { id: '6', name: 'Annie', gender: 'Female', age: '26', height: '160' },
  { id: '7', name: 'Lucy', gender: 'Female', age: '19', height: '170' },
]

const columns = [
  { id: 'name', title: 'Name' },
  {
    id: 'gender',
    title: 'Gender',
  },
  { id: 'age', title: 'Age' },
  { id: 'height', title: 'Height' },
]

export function TablePageCustom() {
  return <Table rows={rows} columns={columns} />
}

// const columns = [
//     { id: 'name', title: 'Name' },
//     {
//       id: 'gender',
//       title: 'Gender',
//       render: (v) => (
//         <span
//           className="font-bold"
//           style={{ color: v.gender === 'Male' ? 'blue' : 'pink' }}
//         >
//           {v.gender}
//         </span>
//       ),
//     },
//     { id: 'age', title: 'Age' },
//     { id: 'height', title: 'Height' },
//   ]
