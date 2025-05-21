// Función para cargar el archivo JSON
fetch('menu.json')
  .then(response => response.json())
  .then(data => crearMenu(data.menu))
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

// Función para crear el menú
function crearMenu(menuData) {
  const menuContainer = document.getElementById('menu');
  const ul = document.createElement('ul');
  ul.classList.add('menu');

  menuData.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.enlace;
    a.textContent = item.nombre;
    li.appendChild(a);

    if (item.submenu) {
      const subMenu = document.createElement('ul');
      subMenu.classList.add('submenu');
      item.submenu.forEach(subItem => {
        const subLi = document.createElement('li');
        const subA = document.createElement('a');
        subA.href = subItem.enlace;
        subA.textContent = subItem.nombre;
        subLi.appendChild(subA);
        subMenu.appendChild(subLi);
      });
      li.appendChild(subMenu);
    }

    ul.appendChild(li);
  });

  menuContainer.appendChild(ul);
}

// Carga el contendio del formulario en el div con id "contenido" del archivo "modificar_menu.php"
document.addEventListener('DOMContentLoaded', () => {
  const menuForm = document.getElementById('menuForm');
  const menuItemsContainer = document.getElementById('menuItems');
  const addMenuItemButton = document.getElementById('addMenuItem');

  // Cargar el menú desde menu.json
  fetch('menu.json')
    .then(response => response.json())
    .then(data => {
      data.menu.forEach(item => {
        addMenuItem(item);
      });
    });

  addMenuItemButton.addEventListener('click', () => {
    addMenuItem();
  });

  function addMenuItem(item = {}) {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu-item');
    menuItemDiv.innerHTML = `
      <input type="text" name="nombre" placeholder="Nombre" value="${item.nombre || ''}">
      <input type="text" name="enlace" placeholder="Enlace" value="${item.enlace || ''}">
      <button type="button" class="removeMenuItem">Eliminar</button>
      <div class="submenuItems">
        ${item.submenu ? item.submenu.map(sub => `
          <div class="submenu-item">
            <input type="text" name="subnombre" placeholder="Nombre Submenú" value="${sub.nombre}">
            <input type="text" name="subenlace" placeholder="Enlace Submenú" value="${sub.enlace}">
            <button type="button" class="removeSubmenuItem">Eliminar</button>
          </div>
        `).join('') : ''}
      </div>
      <button type="button" class="addSubmenuItem">Agregar Submenú</button>
    `;
    menuItemsContainer.appendChild(menuItemDiv);

    menuItemDiv.querySelector('.removeMenuItem').addEventListener('click', () => {
      menuItemDiv.remove();
    });

    menuItemDiv.querySelector('.addSubmenuItem').addEventListener('click', () => {
      addSubmenuItem(menuItemDiv.querySelector('.submenuItems'));
    });

    menuItemDiv.querySelectorAll('.removeSubmenuItem').forEach(button => {
      button.addEventListener('click', (e) => {
        e.target.parentElement.remove();
      });
    });
  }

  function addSubmenuItem(submenuItemsContainer) {
    const submenuItemDiv = document.createElement('div');
    submenuItemDiv.classList.add('submenu-item');
    submenuItemDiv.innerHTML = `
      <input type="text" name="subnombre" placeholder="Nombre Submenú">
      <input type="text" name="subenlace" placeholder="Enlace Submenú">
      <button type="button" class="removeSubmenuItem">Eliminar</button>
    `;
    submenuItemsContainer.appendChild(submenuItemDiv);

    submenuItemDiv.querySelector('.removeSubmenuItem').addEventListener('click', () => {
      submenuItemDiv.remove();
    });
  }
});
