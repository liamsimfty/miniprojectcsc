import prisma from '../../../lib/prisma';

export default async function DataBase()
{
  const data = await prisma.user.findMany();

  const renderBody = data.map((data) => {
    return (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.status}</td>
        <td>{data.akibat}</td>
      </tr>
    )
  })
  return (
    <div>
      <h1>Tampilkan Data</h1>
      <table>
        <thead>
          <tr>
            <th className='text-black'>ID.</th>
            <th className='text-black'>Name.</th>
            <th className='text-black'>Karena.</th>
            <th className='text-black'>Akibat.</th>
          </tr>
        </thead>
        <tbody>{renderBody}</tbody>
      </table>
    </div>
  )
}