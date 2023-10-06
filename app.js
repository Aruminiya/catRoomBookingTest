const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // 阻止預設的表單提交行為

  // 取得表單值
  const room = document.getElementById("room").value;
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;
  const remark = document.getElementById("text").value;
  const cat = document.getElementById("cat").value;
  const userId = document.getElementById("number").value;

  console.log(room, checkIn, checkOut, remark, userId);

  // 建立 JSON 物件
  let formData = {
    room: room,
    date: {
      checkIn: checkIn,
      checkOut: checkOut,
    },
    cat: cat,
    remark: remark,
    userId: userId,
  };

  console.log(formData);

  axios
    .post("http://localhost:3000/orders", formData)
    .then((res) => {
      console.log(res);
      alert("訂單送出成功");
      this.reset();
    })
    .catch((err) => {
      console.log(err);
      alert("訂單送出失敗");
      this.reset();
    });
});
