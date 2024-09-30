document
  .getElementById("btn-donation-quota")
  .addEventListener("click", function () {
    const donationAmount = getInputFieldValueById("quota-input-field");
    if (isNaN(donationAmount)) {
      alert("Wrong Input");
      return;
    } else {
      if (donationAmount < 0) {
        alert("Wrong Input");
        return;
      } else {
        const quotaBalance = getTextFieldValueById("quota-donation-amount");
        const totalBalance = getTextFieldValueById("balance-amount");
        const newDonationAmount = quotaBalance + donationAmount;
        const newBalanceAmount = totalBalance - donationAmount;
        document.getElementById("quota-donation-amount").innerText =
          newDonationAmount;
        document.getElementById("balance-amount").innerText = newBalanceAmount;

        const donationTitle = document.getElementById("quota-title").innerText;
        const historyBox = document.createElement("div");
        historyBox.classList.add("border", "border-gray-300", "mb-5", "p-3");
        const currentTime = new Date().toLocaleTimeString();
        historyBox.innerHTML = `
      <h3 class="text-lg font-semibold">${donationAmount} Taka is donated for ${donationTitle}</h3>
    <p>Time: ${currentTime}</p>
    `;
        document.getElementById("history-container").appendChild(historyBox);
      }
    }
  });
