let todo = {
  id: 1234,
  title: "Learn JavaScript",
};
let ul = document.querySelector(".list");
function createTodoELement() {
  let li = document.createElement("li");
  li.setAttribute("id", `${todo.id}`);
  li.innerHTML = `<div>
                <input type="checkbox" name="" id="checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class="edit">edit</button>
                    <button class="delete">delete</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci aperiam, eaque est officiis facilis voluptas alias iusto quam nihil tenetur porro. Veritatis beatae vitae dolore consectetur! Soluta, officia provident.</p>
                </div>
            </div>`;
  ul.appendChild(li);
}

createTodoELement(todo);
