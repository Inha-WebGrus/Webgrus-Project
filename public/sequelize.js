
  async function getPlace() {
    try {
      const res = await axios.get('/places');
      const places = res.data;
      console.log([places]);
      const tbody = document.querySelector('#place-list tbody');
      tbody.innerHTML = '';
      places.map(function (place) {
        const row = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = place.id;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = place.name;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = place.adress;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = place.created_at;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = place.updated_at;
        row.appendChild(td);
        tbody.appendChild(row);
      });
    } catch (err) {
      console.error(err);
    }
  }
 

  // 사용자 등록 시
  document.getElementById('place-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const adress = e.target.adress.value;
    if (!name) {
      return alert('가게명을 입력하세요');
    }
    if (!adress) {
      return alert('주소를 입력하세요');
    }
    try {
      await axios.post('/placeAdmin', { name, adress });
      getPlace();
    } catch (err) {
      console.error(err);
    }
    e.target.name.value = '';
    e.target.adress.value = '';
  });
 
  document.getElementById('placeEdit-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const adress = e.target.adress.value;
    if (!id) {
      return alert('ID를 입력하세요');
    }
    if (!name) {
      return alert('가게명을 입력하세요');
    }
    if (!adress) {
      return alert('주소를 입력하세요');
    }
    try {
      await axios.put('/placeAdmin', { id , name, adress });
      getPlace();
    } catch (err) {
      console.error(err);
    }
    e.target.id.value = '' ;
    e.target.name.value = '';
    e.target.adress.value = '';
  });
 
  document.getElementById('placeDelete-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    if (!id) {
      return alert('ID를 입력하세요');
    }
    try {
      await axios.delete('/placeAdmin/'+ id );
      
    } catch (err) {
      console.error(err);
    }
    e.target.id.value = '' ;
  });
 