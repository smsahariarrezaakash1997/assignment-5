document
  .getElementById("btn-donation-noakhali")
  .addEventListener("click", function () {
    const donationAmount = getInputFieldValueById("noakhali-input-field");
    if (isNaN(donationAmount)) {
      alert("Wrong Input");
      return;
    } else {
      if (donationAmount < 0) {
        alert("Wrong Input");
        return;
      } else {
        const noakhaliBalance = getTextFieldValueById(
          "noakhali-donation-amount"
        );
        const totalBalance = getTextFieldValueById("balance-amount");
        const newDonationAmount = noakhaliBalance + donationAmount;
        const newBalanceAmount = totalBalance - donationAmount;
        document.getElementById("noakhali-donation-amount").innerText =
          newDonationAmount;
        document.getElementById("balance-amount").innerText = newBalanceAmount;
      }
    }
  });
