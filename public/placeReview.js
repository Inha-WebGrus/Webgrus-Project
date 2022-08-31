document.getElementById('placeReview-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = ;
    const place_id = e.target.id.value;
    const des = e.target.des.value;
    if (!id) {
      return alert('로그인을 하세요');
    }
    if (!des) {
      return alert('내용을 입력하세요');
    }
    try {
      await axios.p0st('/placeList', { id,place_id, adress });
    } catch (err) {
      console.error(err);
    }
    e.targete.target.des.value;
  });