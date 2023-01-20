(() => {
  function sweetAlert(type, title, content) {
    console.log("");
    console.log("[sweetAlert] : " + "[start] : " + type);
    console.log("");

    //타입 분기 처리 실시 (1=일반/2=성공/3=경고/4=실패/5=취소,확인 버튼)
    if (type == 1) {
      swal({
        title: title,
        text: content,
        className: "swal-wide", //커스텀 사이즈
      });
    } else if (type == 2) {
      swal({
        title: title,
        text: content,
        className: "swal-wide", //커스텀 사이즈
        icon: "success", //success, warning, error
        button: "확인",
      });
    } else if (type == 3) {
      swal({
        title: title,
        text: content,
        className: "swal-wide", //커스텀 사이즈
        icon: "warning", //success, warning, error
        button: "확인",
      });
    } else if (type == 4) {
      swal({
        title: title,
        text: content,
        className: "swal-wide", //커스텀 사이즈
        icon: "error", //success, warning, error
        button: "확인",
      });
    } else if (type == 5) {
      swal({
        title: title,
        text: content,
        className: "swal-wide", //커스텀 사이즈
        icon: "error", //success, warning, error
        buttons: {
          cancel: "취소",
          catch: {
            text: "확인",
            value: "catch",
          },
        },
      }).then((value) => {
        switch (value) {
          case "catch":
            sweetAlert(1, "Title", "확인 클릭");
            break;
        }
      });
    }
  }

  window.sAlert = sweetAlert;
})();
