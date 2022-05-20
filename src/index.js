import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了リストに追加
  createIncompleteList(inputText);
};

const deleteFromIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リスト作成
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "lsit-row-parent";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.className = "todo-title";
  p.innerText = text;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加
    const addTarget = completeButton.parentNode;
    const addTargetParent = completeButton.parentNode.parentNode;

    // TODO内容取得
    const text = addTarget.firstElementChild.innerText;

    // li生成
    const li = document.createElement("li");
    li.className = "lsit-row-parent";

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成
    const p = document.createElement("p");
    p.className = "todo-title";
    p.innerText = text;

    // 戻すボタン生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.id = "return-button";
    returnButton.addEventListener("click", () => {
      // 押されたボタンの親タグを削除
      const deleteTarget = returnButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // 完了リストに追加したTODOの内容を取得
      const text = returnButton.parentNode.firstChild.innerText;

      // 未完了リストに追加
      createIncompleteList(text);
    });

    // 完了したTODOに追加
    li.appendChild(div).appendChild(p);
    li.appendChild(div).appendChild(returnButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);

    // 押された完了ボタンの親タグを削除
    deleteFromIncomplete(addTargetParent);
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncomplete(deleteTarget);
  });

  // タイトル
  li.appendChild(div).appendChild(p);
  // 完了ボタン
  li.appendChild(div).appendChild(completeButton);
  // 削除ボタン
  li.appendChild(div).appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
