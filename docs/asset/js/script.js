// import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("js-add__txt").value;
  document.getElementById("js-add__txt").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除する関数

const deleteFromIncompleteList = (li) => {
  const incompleteArea = document.getElementById("js-incomplete__lists");
  if (incompleteArea.hasChildNodes("li")) {
    incompleteArea.removeChild(li);
  }
};

const deleteFromCompleteList = (li) => {
  const completeArea = document.getElementById("js-complete__lists");
  if (completeArea.hasChildNodes("li")) {
    completeArea.removeChild(li);
  }
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li生成
  const li = document.createElement("li");
  li.setAttribute("id", "js-todo__list1");
  li.className = "todo__list";

  //p生成
  const p = document.createElement("p");
  p.className = "todo__title";
  p.innerText = text;

  const div = document.createElement("div");
  div.className = "todo__btn-wrap";

  //button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.className = "todo__btn";
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(li);
    ////以下の処理は上の関数にまとめられる
    // const deleteTarget = completeButton.parentNode;
    // document.getElementById("js-incomplete-lists").removeChild(deleteTarget);

    //完了リストに追加する要素
    const addTarget = li;
    //TODO内容テキスト取得
    const text = addTarget.firstElementChild.innerText;
    //li以下初期化
    addTarget.textContent = null;

    //pタグ生成
    const p = document.createElement("p");
    p.className = "todo__title";
    p.innerText = text;

    const div = document.createElement("div");
    div.className = "todo__btn-wrap";

    //button生成
    const backButton = document.createElement("button");
    backButton.className = "todo__btn";
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(li)
      const deleteTarget = p.parentNode;
      document.getElementById("js-complete__lists").removeChild(deleteTarget);

      //テキスト取得
      const text = li.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //liタグの子要素に各子要素をを追加
    li.appendChild(p);
    li.appendChild(div);
    div.appendChild(backButton);
    div.appendChild(deleteButton);

    //完了リストに追加
    document.getElementById("js-complete__lists").appendChild(li);
  });

  //button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.className = "todo__btn";
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除

    deleteFromCompleteList(li);
    // deleteFromIncompleteList(li);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(div);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //未完了リストに追加
  document.getElementById("js-incomplete__lists").appendChild(li);

  //button(削除)生成
  const incompleteDeleteButton = document.createElement("button"); //ここのdeleteButton は名前変える
  incompleteDeleteButton.className = "todo__btn";
  incompleteDeleteButton.innerText = "削除";
  incompleteDeleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(li);
  });
};

document
  .getElementById("js-add__btn")
  .addEventListener("click", () => onClickAdd());

// まとめ
// createElement：エレメントを生成
// parentNode：親要素を取得
// appendChild：子要素に追加
// removeChild：子要素を削除
// innerText：要素内のテキスト
