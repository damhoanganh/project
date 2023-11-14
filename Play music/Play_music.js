const data = [
  {
    url: "https://avatar-ex-swe.nixcdn.com/song/2022/06/08/0/0/9/1/1654684969581_640.jpg",
    name: "Như Anh Đã Thấy Em - PhucXp",
    src: "mp3/Như Anh Đã Thấy Em  - PhucXp.mp3",
  },
  {
    url: "https://i.scdn.co/image/ab67616d0000b2732461003df8139247949c8a9d",
    name: " Vì Anh Đâu Có Biết -  Feat Vũ",
    src: "mp3/Vì Anh Đâu Có Biết - Madihu Feat Vũ.mp3",
  },
  {
    url: "https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/osJHIePdFnDVJAAAGZAEbekVZDgDFQPRbmf7dA~tplv-nhvfeczskr-1:250:0.webp?from=1152184139&x-expires=1728894017&x-signature=EfuIPfFr27WHVrU1oSZ7r%2B87RAc%3D",
    name: "Miên Man - Minh Huy",
    src: "mp3/Miên Man - Minh Huy.mp3",
  },
  {
    url: "https://i.ytimg.com/vi/NJp5Fz3mTu0/maxresdefault.jpg",
    name: "Tình Yêu Chậm Trễ st - Monstar",
    src: "mp3/Tình Yêu Chậm Trễ - MONSTAR.mp3",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/vi/8/81/Cohenvoithanhxuanposter.jpg",
    name: "Có Hẹn Với Thanh Xuân - Monstar",
    src: "mp3/Có Hẹn Với Thanh Xuân -  Monstar.mp3",
  },
  {
    url: "data:image/jpeg;base64,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",
    name: "Yêu Người Có Ước Mơ - Bùi Trường Linh",
    src: "mp3/Yêu Người Có Ước Mơ - Bùi Trường Linh.mp3",
  },
  {
    url: "https://i.ytimg.com/vi/cdkSV-mBg0s/maxresdefault.jpg",
    name: "Nơi Ta Chờ Em - Will ft Kaity",
    src: "mp3/Nơi Ta Chờ Em - WILL.mp3",
  },
  {
    url: "https://i1.sndcdn.com/artworks-000319063860-5qw7nd-t500x500.jpg",
    name: "Ghé Qua - Dick x PC x Tofu",
    src: "mp3/Ghé Qua - Dick x PC x Tofu.mp3",
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/1/a/1/f/1a1f5688569dfc52005abf304676ea63.jpg",
    name: "Tận Cùng Nỗi Nhớ - Will x Han Sara",
    src: "mp3/Tận Cùng Nỗi Nhớ - Will x Han Sara.mp3",
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w256_r1x1_jpeg/cover/3/f/e/b/3feb103f2fd49c59ad71a3bcca32c267.jpg",
    name: "Ánh Chiều Tàn ft Poll Prod by Vic",
    src: "mp3/Ánh Chiều Tàn ft Poll Prod by Vic.mp3",
  },
  {
    url: "https://i.ytimg.com/vi/s7wlSXxPZ1E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADz9NvKo8BE8ip4dH00xzzEgbhkQ",
    name: "Trước Khi Em Tồn Tại - Cover",
    src: "mp3/Trước Khi Em Tồn Tại - Cover.mp3",
  },
   {
    url: "https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/oMn6tEAcEh7CXLAAjdyXEzvBYIdYI5AtwBNfDW~tplv-nhvfeczskr-1:250:0.webp?from=1152184139&x-expires=1725686731&x-signature=YhHjoHTrSpZ3ADj5Aqpup4thCyE%3D",
    name: "Mashup Đã lỡ yêu em nhiều x Anh là ai?",
    src: "mp3/Mashup Đã lỡ yêu em nhiều x Anh là ai.mp3",
  },
   {
    url: "https://i.pinimg.com/originals/9f/dc/4f/9fdc4f5b1e94c1e597e7b2a3164d5618.jpg",
    name: "Thằng Điên  Justatee x Phương Ly",
    src: "mp3/Thằng Điên Justatee x Phương Ly.mp3",
  },
   {
    url: "https://i.ytimg.com/vi/DVX1LNym0ac/maxresdefault.jpg",
    name: "Hơn Cả Mây Trời - Việt",
    src: "mp3/Hơn Cả Mây Trời - Việt.mp3",
  },
   {
    url: "https://flashview.vn/wp-content/uploads/2023/08/ThumbFinalzloiu.jpg",
    name: "Wn id 072019  3107 ft 267",
    src: "mp3/Wn id 072019  3107 ft 267.mp3",
  },
  {
    url: "https://i.ytimg.com/vi/rfTgO9rpqck/maxresdefault.jpg",
    name: "Heat Waves",
    src: "mp3/Heat Waves.mp3",
  },
];
const playlist = document.querySelector(".play_list");
let html = "";
data.forEach((index) => {
  html += `
       <div>
         <img class="image" src="${index.url}" />
         <span class="name" title="${index.url}" data-src="${index.src}">${index.name}</span>
         <span class="icon-setting">
          <i class="bx bx-menu"> </i>
        </span>
       </div>
      `;
});
playlist.innerHTML = html;
//
//
const title = document.querySelector(".title");
const span = document.querySelectorAll(".name");
const imageAlbum = document.querySelectorAll(".image");
const audioPlayer = document.getElementById("audio-player");
const albumArt = document.querySelector(".banner");
const iconplay = document.querySelector(".icon-play");
const iconpause = document.querySelector(".icon-pause");
//
// Hoặc sử dụng mảng gốc để lặp qua các phần tử
span.forEach(function (index) {
  index.addEventListener("click", function () {
    audioPlayer.src = index.getAttribute("data-src");
    audioPlayer.play();
    iconpause.classList.add("show");
    iconplay.classList.add("hide");
    title.innerHTML = index.textContent;
    albumArt.src = index.title;
  });
});
//
// download music
document.querySelector(".download-music").addEventListener("click", () => {
  const downloadLink = document.createElement("a");
  downloadLink.href = audioPlayer.src;
  downloadLink.download = title.textContent;
  downloadLink.click();
});
// 
const timeSlider = document.getElementById("range");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");

// Lắng nghe sự kiện "timeupdate" khi trình phát nhạc thay đổi thời gian
audioPlayer.addEventListener("timeupdate", function () {
  // Lấy thời gian hiện tại và thời lượng bài hát
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;

  // Tính toán tiến trình phát hiện tại cho thanh trượt
  const progress = (currentTime / duration) * 100;
  timeSlider.value = progress;

  // Cập nhật hiển thị thời gian hiện tại và thời lượng
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);

  // Kiểm tra trạng thái của trình phát nhạc
  if (!audioPlayer.paused) {
    // Bắt đầu xoay hình tròn khi phát nhạc
    albumArt.classList.add("banner1");
  } else {
    // Dừng xoay hình tròn khi dừng phát nhạc
    albumArt.classList.remove("banner1");
  }
});

// Lắng nghe sự kiện "input" từ thanh trượt
timeSlider.addEventListener("input", function () {
  // Lấy giá trị tiến trình từ thanh trượt
  const progress = timeSlider.value;
  const duration = audioPlayer.duration;
  // Tính toán thời gian mục tiêu dựa trên tiến trình
  const seekTime = (progress / 100) * duration;
  // Đặt thời gian của trình phát nhạc tới thời gian mục tiêu
  audioPlayer.currentTime = seekTime;
});

// Hàm định dạng thời gian thành dạng phút:giây
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
//
iconplay.addEventListener("click", function () {
  iconpause.classList.add("show");
  iconplay.classList.add("hide");
  audioPlayer.play();
});
//
iconpause.addEventListener("click", function () {
  iconpause.classList.remove("show");
  iconplay.classList.remove("hide");
  audioPlayer.pause();
});
//
var iconRepeat = document.querySelector(".icon-repeat");
var iconRepeat2 = document.querySelector(".icon-repeat2");
var iconHeart = document.querySelector(".icon-heart");
var iconHeart2 = document.querySelector(".icon-heart2");
var favourite = document.querySelector(".favourite");
var notication = document.querySelector(".notication");
var iconDark = document.querySelector(".icon-darkmode");
var iconLight = document.querySelector(".icon-lightmode");
var darkMode = document.querySelector(".dark-mode");
const iconrepeat = document.querySelector(".icon-repeat");
//
iconRepeat.addEventListener("click", function () {
  iconRepeat2.classList.add("show");
  iconRepeat.classList.add("hide");
  notication.classList.remove("favourite2");
  notication.innerHTML = "Style: Phát lặp một bài";
  setTimeout(() => {
    notication.classList.add("favourite2");
  }, 1000);
  // khi click se phát lặp lại bài đang phát
  audioPlayer.loop = true;
  menuSetting.style.transform = "translateX(1000px)";
  showMenu.style.display = "block";
  hideMenu.style.display = "none";
});
iconRepeat2.addEventListener("click", function () {
  iconRepeat2.classList.remove("show");
  iconRepeat.classList.remove("hide");
  notication.classList.remove("favourite2");
  notication.innerHTML = "Style: Phát theo danh sách";
  setTimeout(() => {
    notication.classList.add("favourite2");
  }, 1000);
  // khi click sẽ thoát lặp lại một bài
  audioPlayer.loop = false;
  menuSetting.style.transform = "translateX(1000px)";
  showMenu.style.display = "block";
  hideMenu.style.display = "none";
});
//
iconHeart.addEventListener("click", function () {
  iconHeart2.classList.add("show");
  iconHeart.classList.add("hide");
  favourite.classList.remove("favourite2");
  setTimeout(() => {
    favourite.classList.add("favourite2");
  }, 1500);
});
iconHeart2.addEventListener("click", function () {
  iconHeart2.classList.remove("show");
  iconHeart.classList.remove("hide");
});
//
iconDark.addEventListener("click", function () {
  const body = document.body;
  body.classList.add("on-dark");
  iconDark.classList.add("hide");
  iconLight.classList.remove("hide");
  darkMode.classList.add("nodark");
  setTimeout(() => {
    darkMode.classList.remove("nodark");
  }, 1500);
});
//
iconLight.addEventListener("click", function () {
  const body = document.body;
  body.classList.remove("on-dark");
  iconDark.classList.remove("hide");
  iconLight.classList.add("hide");
});
//
var iconSetting = document.querySelectorAll(".icon-setting");
var update = document.querySelector(".update");

iconSetting.forEach(function (index) {
  index.addEventListener("click", function () {
    update.classList.remove("favourite3");
    setTimeout(() => {
      update.classList.add("favourite3");
    }, 1500);
  });
});

const iconprev = document.querySelector(".icon-prev");
const iconnext = document.querySelector(".icon-next");
// 
let listTitle = 0;
let listImg = 0;
let musicIndex = 0;
//
const changeSong = (index) => {
  listTitle = (listTitle + data.length + index) % data.length;
  title.innerHTML = data[listTitle].name;
  listImg = (listImg + data.length + index) % data.length;
  albumArt.src = data[listImg].url;

  musicIndex = (musicIndex + index + data.length) % data.length;
  audioPlayer.src = data[musicIndex].src;

  if (audioPlayer.paused) {
    audioPlayer.play();
    iconpause.classList.add("show");
    iconplay.classList.add("hide");
  }
};
iconprev.addEventListener("click", () => changeSong(-1));
iconnext.addEventListener("click", () => changeSong(1));
// Thiết lập sự kiện ended cho thẻ audio giúp tự động phát bài mới khi hết bài
audioPlayer.addEventListener("ended", () => {
  changeSong(1);
});
// 
const showMenu = document.querySelector(".show-menu");
const hideMenu = document.querySelector(".hide-menu");
let menuSetting = document.querySelector(".menu-setting");
showMenu.addEventListener("click", () => {
  menuSetting.style.transform = "translateX(0px)";
  showMenu.style.display = "none";
  hideMenu.style.display = "block";
});
hideMenu.addEventListener("click", () => {
  menuSetting.style.transform = "translateX(1000px)";
  showMenu.style.display = "block";
  hideMenu.style.display = "none";
});
// 
const speed = document.querySelector(".speed");
const speedMusic = document.querySelector(".speed-music");
const full = document.querySelector(".full");
speed.addEventListener("click", () => {
  menuSetting.style.transform = "translateX(1000px)";
  showMenu.style.display = "block";
  hideMenu.style.display = "none";
  speedMusic.style.display = "flex";
  full.style.display = "block";
  document.body.style.overflow = "hidden";
});
let speedMusicClick = document.querySelectorAll(".click-music");
speedMusicClick.forEach((x) => {
  x.addEventListener("click", () => {
    document.body.style.overflow = "scroll";
    audioPlayer.playbackRate = x.textContent;
    full.style.display = "none";
    speedMusic.style.display = "none";
    notication.classList.remove("favourite2");
    notication.innerHTML = "Tốc độ phát :" + " " + x.textContent;
    setTimeout(() => {
      notication.classList.add("favourite2");
    }, 1000);
  });
});
full.addEventListener("click", () => {
  full.style.display = "none";
  speedMusic.style.display = "none";
  volumeOption.style.display = "none";
   document.body.style.overflow = "scroll";
});
// 
const volumeOption = document.querySelector(".volume-option");
document.querySelector(".volume").addEventListener("click", () => {
  full.style.display = "block";
  volumeOption.style.display = "block";
  menuSetting.style.transform = "translateX(1000px)";
  showMenu.style.display = "block";
  hideMenu.style.display = "none";
});
let volumeClick = document.querySelectorAll(".click-volume");
volumeClick.forEach((index) => {
  index.addEventListener("click", () => {
    full.style.display = "none";
    volumeOption.style.display = "none";
    audioPlayer.volume = index.title;
  });
});
