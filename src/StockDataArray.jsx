import React from 'react'
import { StockData } from './data/StockData'

function StockDataArray() {
  return (<>
    <table className='Stok Data'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Stok Price</th>
                <th>Stok Unit</th>
            </tr>
        </thead>
        <tbody>
            {
                StockData.map((item) => {
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice}</td>
                        <td>{item.unitsInStock}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </>)
  }

export default StockDataArray