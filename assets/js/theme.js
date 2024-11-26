// donation amount radio btn
const otherRadio = document.getElementById('amt-other');
const customAmountDiv = document.getElementById('custom-amount');
const otherAmountInput = document.getElementById('other-amount');
document.querySelectorAll('.donation_amt').forEach(radio => {
  radio.addEventListener('change', function () {
    if (otherRadio.checked) { customAmountDiv.style.display = 'flex'; }
    else { customAmountDiv.style.display = 'none'; otherAmountInput.value = ''; }
  });
});
otherAmountInput.addEventListener('input', function () {
  let value = otherAmountInput.value;
  value = value.replace(/[^0-9]/g, '');
  if (value.length > 4) { value = value.slice(0, 4); }
  otherAmountInput.value = value;
});

// Tabing
$(function () {
  var activeIndex = $('.active-tab').index(),
    $contentlis = $('.tabs-content li'),
    $tabslis = $('.tabs li');
  $contentlis.eq(activeIndex).show();
  $('.tabs').on('click', 'li', function (e) {
    var $current = $(e.currentTarget),
      index = $current.index();
    $tabslis.removeClass('active-tab');
    $current.addClass('active-tab');
    $contentlis.hide().eq(index).show();
  });
});

// payment page
const bounds = document.querySelectorAll("[data-bound]");
for (let i = 0; i < bounds.length; i++) {
  const targetId = bounds[i].getAttribute("data-bound");
  const defValue = bounds[i].getAttribute("data-def");
  const targetEl = document.getElementById(targetId);
  bounds[i].addEventListener("blur", () => (targetEl.innerText = bounds[i].value || defValue));
}
const cvc_toggler = document.getElementById("cvc_toggler");
cvc_toggler.addEventListener("click", () => {
  const target = cvc_toggler.getAttribute("data-target");
  const el = document.getElementById(target);
  el.setAttribute("type", el.type === "text" ? "password" : "text");
});
function onlyNumberKey(evt) { var ASCIICode = evt.which ? evt.which : evt.keyCode; if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false; return true; }
$(function () {
  $("#cardNumber").on("keyup", function (e) {
    var val = $(this).val();
    var newval = "";
    val = val.replace(/\s/g, "");
    for (var i = 0; i < val.length; i++) { if (i % 4 == 0 && i > 0) newval = newval.concat(" "); newval = newval.concat(val[i]); }
    $(this).val(newval);
  });
  $(".year-own").datepicker({ minViewMode: 2, format: "yyyy" });
  $(".month-own").datepicker({ format: "MM", minViewMode: "months", maxViewMode: "months", startView: "months" });
});