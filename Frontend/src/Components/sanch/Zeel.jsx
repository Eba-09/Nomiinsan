import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
const Zeel = () => {
  const [rows, setRows] = useState([]);
  const {sanch} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [count, setcount] = useState(null);
  useEffect(() => {
    if (sanch) {
      axios
        .get(`http://localhost:8000/api/lib/zeel`)
        .then((res) => {
          setcount(res.data.count)
          const zahialguud = res.data.data.map((zeel, index) => ({
            id: zeel._id,
            userName: zeel.userCode.Lname,
            name: zeel.nomCode.name,
            hel: zeel.nomCode.hel,
            rating: `${zeel.nomCode.rating} / 5`,
            tuluw: zeel.hugatsaaHetreh ? 'Хэтэрсэн' : 'Хэтрээгүй',
            ugsun: zeel.ugsun ? 'Өгсөн' : 'Өгөөгүй',
            sanchName: zeel.sanchCode.sanchLN,
            nomawsanDate: new Date(zeel.nomawsanDate).toLocaleDateString(),
            butsaahDate: new Date(zeel.butsaahDate).toLocaleDateString(),
          }));
          setRows(zahialguud);
          setLoading(false);
        })
        .catch((e) => {
          console.error(e);
          setLoading(false);
        });
    }
  }, [sanch]);

  const columns = [
    { field: 'userName', headerName: 'Хэрэглэгч', width: 120 },
    { field: 'name', headerName: 'Номын нэр', width: 200 },
    { field: 'hel', headerName: 'Хэл', width: 95 },
    { field: 'rating', headerName: 'Үнэлгээ', width:70 },
    { field: 'tuluw', headerName: 'Хугацаа', width: 100 },
    { field: 'sanchName', headerName: 'Номын санч', width: 120 },
    { field: 'ugsun', headerName: 'Өгсөн эсэх', width: 100 },
    { field: 'nomawsanDate',headerName:'Ном авсан өдөр', width: 140 },
    { field: 'butsaahDate', headerName: 'Ном буцаах өдөр', width: 140 },
  ];
  return (
    <div style={{ height: 590, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        sortingOrder={['desc', 'asc']}
        initialState={{
          sorting: {
            sortModel: [{ field: 'nomawsanDate', sort: 'desc' }],
          },
        }}
      />
    </div>
  );
};
export default Zeel;
