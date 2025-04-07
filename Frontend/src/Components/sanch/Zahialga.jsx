import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
const Zahialga = () => {
  const [rows, setRows] = useState([]);
  const {sanch} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (sanch) {
      axios
        .get(`http://localhost:8000/api/lib/zahialga`)
        .then((res) => {
          const zahialguud = res.data.data.map((zahialga, index) => ({
            id: zahialga._id,
            userName: zahialga.userCode,
            name: zahialga.nomCode.name,
            hel: zahialga.nomCode.hel,
            rating: `${zahialga.nomCode.rating} / 10`,
            tuluw: zahialga.tuluw ? 'Баталгаажсан' : 'Хүлээгдэж байна',
            zahialgaDate: new Date(zahialga.zahialgaDate).toLocaleDateString(),
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
    { field: 'hel', headerName: 'Хэл', width: 120 },
    { field: 'rating', headerName: 'Үнэлгээ', width: 120 },
    { field: 'tuluw', headerName: 'Төлөв', width: 180 },
    { field: 'zahialgaDate', headerName: 'Захиалсан огноо', width: 180 },
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
            sortModel: [{ field: 'zahialgaDate', sort: 'desc' }],
          },
        }}
      />
    </div>
  );
};

export default Zahialga;
