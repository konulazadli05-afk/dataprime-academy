async function send() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;

  const msg = document.getElementById("msg");

  if (!name || !phone || !course) {
    msg.innerText = "⚠ Bütün xanaları doldurun!";
    msg.style.color = "red";
    return;
  }

  msg.innerText = "Göndərilir...";
  msg.style.color = "black";

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        course
      })
    });

    const data = await res.json();

    msg.innerText = data.message;

    if (res.ok) {
      msg.style.color = "green";

      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("course").value = "";
    } else {
      msg.style.color = "red";
    }

  } catch (err) {
    console.log(err);

    msg.innerText = "Serverə qoşulmaq olmur!";
    msg.style.color = "red";
  }
}