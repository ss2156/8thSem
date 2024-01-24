function convertTime() {
  let dateTime = document.getElementById("datetime").value;
  let selectedTimeZone = document.getElementById("timezone").value;

  if (dateTime) {
    let inputDate = new Date(dateTime);
    let offset;

    switch (selectedTimeZone) {
      case "UTC":
        offset = 0;
        break;
      case "IST":
        offset = 5.5;
        break;
    }

    let outputDate = new Date(inputDate.getTime() + offset * 60 * 60 * 1000);
    document.getElementById("converted-time").textContent =
      outputDate.toLocaleString();
  } else {
    document.getElementById("converted-time").textContent = "";
  }
}
