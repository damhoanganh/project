var navbar = document.querySelector(".click1");
var navbar2 = document.querySelector(".clickmenu");
var navbar3 = document.querySelector(".clickmenu2");
var navbar4 = document.querySelector(".full");
navbar.addEventListener("click", function () {
  navbar2.classList.toggle("clickmenu");
  navbar3.classList.remove("clickmenu2");
  navbar4.classList.remove("full1");
  document.body.style.overflow = "hidden";
});

navbar3.addEventListener("click", function () {
  navbar2.classList.toggle("clickmenu");
  navbar3.classList.add("clickmenu2");
  navbar4.classList.add("full1");
  document.body.style.overflow = "auto";
});

navbar4.addEventListener("click", function () {
  navbar2.classList.toggle("clickmenu");
  navbar3.classList.add("clickmenu2");
  navbar4.classList.add("full1");
  document.body.style.overflow = "auto";
});

var navbar5 = document.querySelector(".menu_search1");
var navbar6 = document.querySelector(".menu_search2");

navbar5.addEventListener("click", function () {
  navbar6.classList.remove("clickmenu3");
});

var navbar7 = document.querySelector(".out_search");
navbar7.addEventListener("click", function () {
  navbar6.classList.add("clickmenu3");
});

var service = document.querySelector(".service");
service.addEventListener("click", function () {
  navbar2.classList.toggle("clickmenu");
  navbar3.classList.add("clickmenu2");
  navbar4.classList.add("full1");
});
//

//
var slides = document.querySelectorAll(".banner-image");
var slideIndex = 0;
function showSlides() {
  slides.forEach((index) => {
    index.classList.add("hide");
  });
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].classList.remove("hide");
}
setInterval(showSlides, 2000); // Chuyển ảnh sau mỗi 2 giây
//
let buyNow = document.querySelectorAll(".buynow");
let productNotication = document.querySelector(".product-notication");
buyNow.forEach((index) => {
  index.addEventListener("click", () => {
    productNotication.classList.add("product-notication2");
    setTimeout(() => {
      productNotication.classList.remove("product-notication2");
    }, 1200);
  });
});
//
//
var formlogin = document.querySelector(".form_login");
var full2 = document.querySelector(".full2");
document.querySelector(".account").addEventListener("click", () => {
  formlogin.style.display = "flex";
  full2.classList.remove("full3");
  formlogin.classList.remove("form_login3");
  document.body.style.overflow = "hidden";
});
//
//
var iconclose = document.querySelector(".icon_close");
iconclose.addEventListener("click", function () {
  formlogin.style.display = "none";
  full2.classList.add("full3");
  document.body.style.overflow = "auto";
});
//
// ẩn hiện password
document.querySelector(".icon_eye").addEventListener("click", () => {
  let password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
//
let username = document.getElementById("username");
let password = document.getElementById("password");
let errorUser = document.getElementById("usernameError");
let errorPassword = document.getElementById("passwordError");
username.addEventListener("input", function (e) {
  const specialCharacters = /[%^&!~?"'()*#$/]/;
  if (specialCharacters.test(e.target.value)) {
    errorUser.innerHTML = "Don't use special characters";
  } else {
    errorUser.innerHTML = "";
  }
  if (e.target.value.length > 30) {
    errorUser.innerHTML = "Max 30 characters";
  }
});
password.addEventListener("input", function (e) {
  const specialCharacters = /[%^&!~?"'()*@#$/]/;
  if (specialCharacters.test(e.target.value)) {
    errorPassword.innerHTML = "Don't use special characters";
  } else {
    errorPassword.innerHTML = "";
  }
});
//
let loader2 = document.querySelector(".full-load");
let iconfly = document.querySelector(".icon_fly");
iconfly.addEventListener("click", function (e) {
  if (username.value === "") {
    errorUser.innerHTML = "Please enter your account";
  }
  if (password.value === "") {
    errorPassword.innerHTML = "Please enter your password";
  }
  if (password.value.length < 8) {
    errorPassword.innerHTML = "min 8 characters";
  }
  if (
    username.value === "hoanganh17072002@gmail.com" &&
    password.value.length > 7
  ) {
    loader2.style.display = "block";
    e.preventDefault(); // ngăn chặn load lại trang
    setTimeout(() => {
      window.location.href = "https://damhoanganh.github.io/project/Watch store/index.html"; // load lại trang
    }, 2000);
  } else {
    e.preventDefault(); // ngăn chặn load lại trang khi sai tk và mk
    alert("Incorrect username or password");
  }
});
//
let register = document.querySelector(".register");
let registerForm = document.querySelector(".register-form");
register.addEventListener("click", () => {
  let login = document.querySelector(".login");
  login.style.display = "none";
  registerForm.style.display = "block";
  let iconBack = document.querySelector(".icon-back");
  iconBack.addEventListener("click", () => {
    login.style.display = "block";
    registerForm.style.display = "none";
  });
});
let emailRegister = document.querySelector(".email-register");
let errorEmail = document.querySelector("#error-email");
emailRegister.addEventListener("keyup", (e) => {
  const specialCharacters = /[%^&!~?"'()*#$/]/;
  if (specialCharacters.test(e.target.value)) {
    errorEmail.innerHTML = "Don't use special characters";
  } else {
    errorEmail.innerHTML = "";
  }
  if (e.target.value.length > 30) {
    errorEmail.innerHTML = "Max 30 characters";
  }
  if (e.key === " ") {
    errorEmail.innerHTML = "Information must not have white space";
  }
});
//
let passwordRegister = document.querySelector(".password-register");
let passwordRegister2 = document.querySelector(".password-register2");
let errorPassword2 = document.querySelector("#error-password");
let errorPassword3 = document.querySelector("#error-password2");
passwordRegister.addEventListener("keyup", (e) => {
  if (e.key === " ") {
    errorPassword2.innerHTML = "Information must not have white space";
  }
  if (e.target.value.length > 0) {
    // Nếu ô đầu tiên có giá trị, bỏ khóa ô thứ hai và cho phép nhập
    passwordRegister2.disabled = false;
  } else {
    // Nếu ô đầu tiên rỗng, khóa ô thứ hai
    passwordRegister2.disabled = true;
  }
});
passwordRegister.addEventListener("input", (e) => {
  const specialCharacters = /[%^&!~?"'()*@#$/]/;
  if (specialCharacters.test(e.target.value)) {
    errorPassword2.innerHTML = "Don't use special characters";
  } else {
    errorPassword2.innerHTML = "";
  }
});
//
let registerSubmit = document.querySelector(".register-submit");
let registerName = document.querySelector(".name-register");
let errorDate = document.getElementById("error-date");
let errorName = document.getElementById("error-name");
const registerDate = document.querySelector(".register-date");
let loader4 = document.querySelector(".loader4");
registerSubmit.addEventListener("click", (e) => {
  e.preventDefault(); // ngăn chặn load lại trang
  if (emailRegister.value === "") {
    errorEmail.innerHTML = "Please enter your account";
  }
  if (registerDate.value === "") {
    errorDate.innerHTML = "Please choose the date";
  }
  if (passwordRegister.value === "") {
    errorPassword2.innerHTML = "Please enter your password";
  }
  if (passwordRegister2.value !== passwordRegister.value) {
    errorPassword3.innerHTML = "The password is not matched";
  }
  if (passwordRegister.value.length > 0 && passwordRegister.value.length < 8) {
    errorPassword2.innerHTML = "Min 8 characters";
  }
  if (passwordRegister2.value === "") {
    errorPassword3.innerHTML = "Please enter again password";
  }
  if (registerName.value === "") {
    errorName.style.opacity = "1";
  }
  setTimeout(() => {
    errorDate.innerHTML = "";
    errorEmail.innerHTML = "";
    errorPassword2.innerHTML = "";
    errorPassword3.innerHTML = "";
    errorName.style.opacity = "0";
  }, 2000);
  if (
    registerDate.value !== "" &&
    emailRegister.value !== "" &&
    passwordRegister.value.length > 7 &&
    passwordRegister.value !== "" &&
    passwordRegister.value === passwordRegister2.value &&
    registerName.value !== ""
  ) {
    setTimeout(() => {
      window.location.href = "https://damhoanganh.github.io/project/Watch store/index.html"; // load lại trang
    }, 2000);
    registerForm.style.display = "none";
    loader4.style.display = "block";
  }
});
//
//
let fullSearch = document.querySelector(".full-search");
let navbarFixed = document.querySelector(".navbar");
let keywordUi = document.querySelector(".keyword-ui");
let iconSearch = document.querySelector(".icon-search2");
let block2 = document.querySelector(".block-2");
let block3 = document.querySelector(".block-3");
let loaderSearch = document.querySelector(".loader-search");
let searchNotication = document.querySelector(".search-notication");
document.querySelector(".icon-search").addEventListener("click", () => {
  fullSearch.style.transform = "translateY(0px)";
  navbarFixed.style.transform = "translateY(-60px)";
  document.body.style.overflow = "hidden";
});
document.querySelector(".full-search-out").addEventListener("click", () => {
  fullSearch.style.transform = "translateY(-200vh)";
  navbarFixed.style.transform = "translateY(0px)";
  searchNotication.style.display = "none";
  document.body.style.overflow = "auto";
});
// Thực hiện fetch ngay khi trang được tải
fetch("http://localhost:3000/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    iconSearch.addEventListener("click", () => {
      const keyword = document.querySelector(".keyword");
      block3.style.display = "none";
      block2.style.display = "none";
      setTimeout(() => {
        block2.style.display = "block";
      }, 1020);
      loaderSearch.style.display = "block";
      searchNotication.style.display = "none";
      keywordUi.style.display = "none";
      setTimeout(() => {
        loaderSearch.style.display = "none";
      }, 1000);
      let results = data.filter((job) => {
        return (
          job.name.toLowerCase().includes(keyword.value.toLowerCase()) ||
          job.price.toLowerCase().includes(keyword.value.toLowerCase())
        );
      });
      if (keyword.value === "") {
        setTimeout(() => {
          block2.style.display = "none";
          searchNotication.style.display = "block";
        }, 1020);
      }
      if (results.length > 0 && keyword.value !== "") {
        setTimeout(() => {
          block2.style.display = "none";
          keywordUi.style.display = "block";
        }, 1020);
        keywordUi.innerHTML =
          "There are" +
          " " +
          results.length +
          " " +
          "products with keyword" +
          " " +
          '"' +
          keyword.value +
          '"' +
          " :";
      }
      let html = "";
      if (results.length > 0 && keyword.value !== "") {
        setTimeout(() => {
          block2.style.display = "none";
          block3.style.display = "flex";
        }, 1020);
        results.forEach((index) => {
          html += `
          <div class="block-3-item">
            <img src="${index.url}" alt="">
            <div>${index.name}</div>
            <span>${index.price}</span>
          </div>
                    `;
        });
        block3.innerHTML = html;
      }
    });
  })
  .catch((error) => {
    searchNotication.innerHTML = "error download data!";
  });
//
//
// animation service
const leftImage = document.querySelector(".image1");
const rightImage = document.querySelector(".image2");
window.addEventListener("scroll", () => {
  // Lấy chiều cao của cửa sổ trình duyệt
  const windowHeight = window.innerHeight;
  // Lấy kích thước và vị trí của phần tử hình ảnh bên trái
  const leftImageRect = leftImage.getBoundingClientRect();
  // Lấy kích thước và vị trí của phần tử hình ảnh bên phải
  const rightImageRect = rightImage.getBoundingClientRect();
  // Kiểm tra xem phần tử hình ảnh bên trái đã vào tầm nhìn của người dùng chưa
  if (leftImageRect.top < windowHeight) {
    // Nếu đúng, thêm lớp CSS "active" để kích hoạt animation
    leftImage.classList.add("active");
    rightImage.classList.add("active");
  }
});
//

//
document.getElementById("follow-button").addEventListener("click", () => {
  let followInput = document.getElementById("follow-input");
  if (followInput.value === "") {
    alert("Please enter email or phone number");
  } else {
    alert("Register success!");
    followInput.value = "";
  }
});
//
//

//
const optionStatus = document.querySelectorAll(".option-status");
optionStatus.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      optionStatus.forEach((cb) => {
        if (cb !== this) {
          cb.checked = false;
        }
      });
    }
  });
});
//
const optionSale = document.querySelectorAll(".option-sale");
optionSale.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      optionSale.forEach((cb) => {
        if (cb !== this) {
          cb.checked = false;
        }
      });
    }
  });
});
//
//
const data = [
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/289338/casio-a168wer-2adf-unisex-thumbb-600x600.jpg",
    name: "Watch Casio 38.6 x 36.3mm Unisex A168WER-2ADF",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/309420/orient-ra-aa0818l19b-nam-thumb-600x600.jpg",
    name: " Watch Orient Mako 41.8mm  RA-AA0818L19B",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/286997/citizen-em0896-89y-nu-thumb-600x600.jpg",
    name: " Watch CITIZEN 30.5mm EM0896-89Y     ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/231868/elio-el044-01-nu-1-600x600.jpg",
    name: " Watch ELIO Spring Sunshine 31mm EL044-01",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/199510/casio-a159wa-n1df-bac-up-1-1-org.jpg",
    name: " Đồng hồ CASIO 33mm Unisex A159WA-N1DF ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/200855/citizen-be9170-05l-xanh-2-2-org.jpg",
    name: " Watch CITIZEN 39mm Men BE9170-05L ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/200840/citizen-an3610-55l-xanh-600x600.jpg",
    name: " Watch CITIZEN 41mm Men AN3610-55L  ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/231850/elio-el027-01-nu-1-600x600.jpg",
    name: " Watch ELIO Summer 32mm Woman EL027-01 ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/217895/korlex-ks016-01-nu-2-org.jpg",
    name: " Watch KORLEX 36mm Woman KS016-01 ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/317070/mvw-msa089-01-s1-nam-1-600x600.jpg",
    name: " Watch MVW Galaxy 41mm Man MSA089-01-S1 ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/309425/orient-re-av0b09n00b-nam-thumb-600x600.jpg",
    name: " Watch Orient Star 41mm Nam RE-AV0B09N00B  ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/316393/citizen-tsuyosa-pantone-nj0158-89z-nam-1.jpg",
    name: " Watch Citizen Tsuyosa Pantone 40mm Nam NJ0158-89Z  ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/198470/fossil-fs5304-nau-600x600.jpg",
    name: " Watch CASIO 35mm Men MQ-76-2ALDF  ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/199279/casio-mq-24-7e2ldf-den-600x600.jpg",
    name: " Watch CASIO 35mm Men MQ-24-7E2LDF  ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/199583/edifice-casio-efv-570d-1avudf-bac-1-3-600x600.jpg",
    name: " Watch EDIFICE CASIO 42mm Men EFV-570D-1AVUDF  ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/199557/edifice-casio-efr-526d-7avudf-bac-1-3-600x600.jpg",
    name: " Watch EDIFICE CASIO 42mm Men EFR-526D-7AVUDF  ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/200859/citizen-bh3003-51a-trang-2-600x600.jpg",
    name: " Watch EDIFICE CASIO 39mm EFR-526L-7AVUDF ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/200937/citizen-nh8350-59b-trang-0-600x600.jpg",
    name: " Watch CITIZEN Mechanical 40mm Woman NH8350-59B  ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/200881/citizen-ca0690-88l-xanh-5-600x600.jpg",
    name: " Watch CITIZEN 44mm Men CA0690-88L  ",
  },
  {
    url: "https://cdn.tgdd.vn/Products/Images/7264/200865/citizen-bi5072-51e-den-2-600x600.jpg",
    name: " Watch CITIZEN 40.5mm Woman BI5072-51EF  ",
  },
];
let products = [];
data.forEach((product) => {
  const randomPrice = Math.floor(Math.random() * 1000); // Giá tiền sản phẩm ngẫu nhiên
  const sale = Math.floor(Math.random() * 100); // Giảm giá ngẫu nhiên từ 0% đến 100%
  const status = Math.floor(Math.random() * 10);
  products.push({
    url: product.url,
    name: product.name,
    randomPrice: randomPrice,
    sale: sale,
    status: status,
  });
});

const ProductList = document.querySelector(".product-list");

function renderProducts(products) {
  let html = "";
  products.forEach((product) => {
    html += `
      <div class="item">
        <img src="${product.url}" alt="WatchSeri" />
        <div>${product.name}</div>
        <span>$${product.randomPrice}</span>
        <p>.00(-${product.sale}%)</p>
        <h3>${product.status}</h3>
        <button class="add-to-cart">Add to cart</button>
      </div>
    `;
  });
  ProductList.innerHTML = html;
}
renderProducts(products); // gọi hàm để in ra danh sách sản phẩm
//
//
// Hàm sắp xếp danh sách objects ngẫu nhiên
function randomizeList() {
  for (let i = ProductList.children.length; i >= 0; i--) {
    ProductList.appendChild(ProductList.children[(Math.random() * i) | 0]);
  }
}
let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");
let pageRight = document.querySelector(".page-right");
page1.addEventListener("click", () => {
  page1.style.backgroundColor = "rgba(4,4,110)";
  page1.style.color = "white";
  page2.style.backgroundColor = "transparent";
  page2.style.color = "rgba(4, 4, 110)";
  page3.style.backgroundColor = "transparent";
  page3.style.color = "rgba(4, 4, 110)";
  randomizeList();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});

page2.addEventListener("click", () => {
  page2.style.backgroundColor = "rgba(4,4,110)";
  page2.style.color = "white";
  page1.style.backgroundColor = "transparent";
  page1.style.color = "rgba(4, 4, 110)";
  page3.style.backgroundColor = "transparent";
  page3.style.color = "rgba(4, 4, 110)";
  randomizeList();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});
page3.addEventListener("click", () => {
  page3.style.backgroundColor = "rgba(4,4,110)";
  page3.style.color = "white";
  page1.style.backgroundColor = "transparent";
  page1.style.color = "rgba(4, 4, 110)";
  page2.style.backgroundColor = "transparent";
  page2.style.color = "rgba(4, 4, 110)";
  randomizeList();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});
pageRight.addEventListener("click", () => {
  alert(
    "Functions are being researched and developed,please click number page"
  );
});
//
// Lọc theo trạng thái : cũ và mới
const statusOld = document.getElementById("status-old");
const statusNew = document.getElementById("status-new");
function filterStatus() {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const statuss = parseInt(
      item.querySelector("h3").textContent.replace(/\D/g, "")
    );
    const showOld = statusOld.checked && statuss < 5;
    const showNew = statusNew.checked && statuss > 5;

    if ((statusOld.checked || statusNew.checked) && !showOld && !showNew) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}
let loader = document.querySelector(".loader");
statusOld.addEventListener("change", () => {
  filterStatus();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});

statusNew.addEventListener("change", () => {
  filterStatus();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});
//
// Sắp xếp sản phẩm theo giá
document.querySelector(".low-to-high").addEventListener("click", function () {
  const sortedProducts = products
    .slice()
    .sort((a, b) => a.randomPrice - b.randomPrice);
  renderProducts(sortedProducts);
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});

document.querySelector(".high-to-low").addEventListener("click", function () {
  const sortedProducts = products
    .slice()
    .sort((a, b) => b.randomPrice - a.randomPrice);
  renderProducts(sortedProducts);
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});
//
//  Lọc theo đối tượng : nam , nữ , cặp đôi và trẻ em
const subjectMen = document.getElementById("subject-men");
const subjectWomen = document.getElementById("subject-women");
const subjectCouple = document.getElementById("subject-couple");
const subjectChildren = document.getElementById("subject-children");
function filterSubject() {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const sale = parseInt(item.querySelector("h3").textContent);
    const showMen = subjectMen.checked && sale < 3;
    const showWomen = subjectWomen.checked && sale > 5;
    const showCouple = subjectCouple.checked && sale < 5;
    const showChildren = subjectChildren.checked && sale > 7;

    if (
      (subjectMen.checked ||
        subjectWomen.checked ||
        subjectCouple.checked ||
        subjectChildren.checked) &&
      !showMen &&
      !showWomen &&
      !showCouple &&
      !showChildren
    ) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}
const container = document.querySelector(".container");
subjectMen.addEventListener("change", () => {
  filterSubject();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});

subjectWomen.addEventListener("change", () => {
  filterSubject();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});

subjectCouple.addEventListener("change", () => {
  filterSubject();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});

subjectChildren.addEventListener("change", () => {
  filterSubject();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});
//
// Lọc theo phong thủy : kim, mộc, thủy, hỏa, thổ
const fengshui1 = document.getElementById("fengshui1");
const fengshui2 = document.getElementById("fengshui2");
const fengshui3 = document.getElementById("fengshui3");
const fengshui4 = document.getElementById("fengshui4");
const fengshui5 = document.getElementById("fengshui5");
function filterFengshui() {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const sale = parseInt(item.querySelector("h3").textContent);
    const show1 = fengshui1.checked && sale <= 2;
    const show2 = fengshui2.checked && sale > 2 && sale <= 4;
    const show3 = fengshui3.checked && sale > 4 && sale <= 6;
    const show4 = fengshui4.checked && sale > 6 && sale <= 8;
    const show5 = fengshui5.checked && sale > 8;
    if (
      (fengshui1.checked ||
        fengshui2.checked ||
        fengshui3.checked ||
        fengshui4.checked ||
        fengshui5.checked) &&
      !show1 &&
      !show2 &&
      !show3 &&
      !show4 &&
      !show5
    ) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}
fengshui1.addEventListener("change", () => {
  filterFengshui();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});

fengshui2.addEventListener("change", () => {
  filterFengshui();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});

fengshui3.addEventListener("change", () => {
  filterFengshui();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});

fengshui4.addEventListener("change", () => {
  filterFengshui();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});
fengshui5.addEventListener("change", () => {
  filterFengshui();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});
//
const saleUnder50 = document.getElementById("sale-down-50");
const saleOver50 = document.getElementById("sale-up-50");
function filterSale() {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const sale = parseInt(
      item.querySelector("p").textContent.replace(/\D/g, "")
    );
    const showUnder50 = saleUnder50.checked && sale < 50;
    const showOver50 = saleOver50.checked && sale >= 50;

    if (
      (saleUnder50.checked || saleOver50.checked) &&
      !showUnder50 &&
      !showOver50
    ) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}
saleUnder50.addEventListener("change", () => {
  filterSale();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});
saleOver50.addEventListener("change", () => {
  filterSale();
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
});
//
// Bắt sự kiện click nút lọc giá
let down100 = document.querySelector(".down100");
down100.addEventListener("click", function () {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    const price = parseInt(
      item.querySelector("span").textContent.replace(/\D/g, "")
    );
    if (price < 100) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
  this.style.backgroundColor = "green";
  down500.style.backgroundColor = "rgb(4,4,110)";
  down700.style.backgroundColor = "rgb(4,4,110)";
  up700.style.backgroundColor = "rgb(4,4,110)";
});

let down500 = document.querySelector(".down500");
down500.addEventListener("click", function () {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    const price = parseInt(
      item.querySelector("span").textContent.replace(/\D/g, "")
    );
    if (price >= 100 && price <= 500) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
  this.style.backgroundColor = "green";
  down100.style.backgroundColor = "rgb(4,4,110)";
  down700.style.backgroundColor = "rgb(4,4,110)";
  up700.style.backgroundColor = "rgb(4,4,110)";
});
let down700 = document.querySelector(".down700");
down700.addEventListener("click", function () {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    const price = parseInt(
      item.querySelector("span").textContent.replace(/\D/g, "")
    );
    if (price >= 500 && price <= 700) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
  this.style.backgroundColor = "green";
  down100.style.backgroundColor = "rgb(4,4,110)";
  down500.style.backgroundColor = "rgb(4,4,110)";
  up700.style.backgroundColor = "rgb(4,4,110)";
});
let up700 = document.querySelector(".up700");
up700.addEventListener("click", function () {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    const price = parseInt(
      item.querySelector("span").textContent.replace(/\D/g, "")
    );
    if (price >= 700) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  container.scrollIntoView();
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
  this.style.backgroundColor = "green";
  down100.style.backgroundColor = "rgb(4,4,110)";
  down500.style.backgroundColor = "rgb(4,4,110)";
  down700.style.backgroundColor = "rgb(4,4,110)";
});
// Bắt sự kiện khi click nút "Xóa bộ lọc"
document.querySelector(".clear-filter").addEventListener("click", function () {
  const products = document.querySelectorAll(".item");
  products.forEach((product) => {
    product.style.display = "block";
  });
  loader.style.display = "block";
  ProductList.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    ProductList.style.opacity = "1";
  }, 500);
  down100.style.backgroundColor = "rgb(4,4,110)";
  down500.style.backgroundColor = "rgb(4,4,110)";
  down700.style.backgroundColor = "rgb(4,4,110)";
  up700.style.backgroundColor = "rgb(4,4,110)";
});
//
//
const cart = document.querySelector(".cart");
let homePay = document.querySelector(".home-pay");
let itemsTotal = document.querySelector(".items-total");
let total = 0;
document.querySelector(".icon-cart").addEventListener("click", () => {
  cart.classList.add("show-cart");
  document.body.style.overflow = "hidden";
  full2.classList.remove("full3");
});
document.querySelector(".icon-out").addEventListener("click", () => {
  cart.classList.remove("show-cart");
  homePay.style.display = "none";
  full2.classList.add("full3");
  document.body.style.overflow = "auto";
  cart.style.overflow = "auto";
  order.style.display = "block";
});
//
let carNumber = 0;
let cartNotication = document.querySelector(".cart-notication");
let order = document.querySelector(".orders");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    cartNotication.style.display = "none";
    order.style.display = "block";
    const product = this.parentElement;
    const productImage = product.querySelector("img").src;
    const productName = product.querySelector("div").textContent;
    const productPrice = product.querySelector("span").textContent;
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-items");
    cartItem.innerHTML = `
    <img src="${productImage}" alt="">
           <div>
            <span>${productName}</span>
            <p>${productPrice}.00</p>
           </div>
           <span class="icon-delete"><i class='bx bx-trash-alt' ></i></span>
    `;
    cart.appendChild(cartItem); // click add to cart sẽ thêm sản phẩm
    const numberCart = document.querySelector(".number-cart");
    carNumber = carNumber + 1;
    numberCart.innerHTML = carNumber;
    const price = parseFloat(productPrice.replace("$", "").replace(".00", ""));
    total += price; // Cộng giá tiền của sản phẩm vào tổng
    itemsTotal.innerHTML = "Total: $" + total + ".00";
    //
    let removeItem = cartItem.querySelector(".icon-delete"); //xóa sản phẩm
    removeItem.addEventListener("click", () => {
      cartItem.style.display = "none";
      total = total - price;
      itemsTotal.innerHTML = "Total: $" + total + ".00";
      if (total === 0) {
        cartNotication.style.display = "block";
        order.style.display = "none";
      }
      carNumber = carNumber - 1;
      numberCart.innerHTML = carNumber;
      if (carNumber === 0) {
        numberCart.innerHTML = "";
      }
    });
  });
});
order.addEventListener("click", () => {
  if (total > 0) {
    homePay.style.display = "block";
    full2.classList.remove("full3");
    document.body.style.overflow = "hidden";
    order.style.display = "none";
    cart.style.overflow = "hidden";
  }
});
//
document.getElementById("buy-now").addEventListener("click", () => {
  let buyFullname = document.getElementById("buy-fullname").value;
  let buyAge = document.getElementById("buy-age").value;
  let buyNumber = document.getElementById("buy-number").value;
  let buyAddress = document.getElementById("buy-address").value;
  let loader2 = document.querySelector(".loader2");
  if (
    buyFullname === "" ||
    buyAge === "" ||
    buyAddress === "" ||
    buyNumber === ""
  ) {
    alert("Please enter the information to proceed");
  } else {
    loader2.style.display = "block";
    setTimeout(() => {
      location.reload(); // load lại trang
    }, 2000);
  }
});
