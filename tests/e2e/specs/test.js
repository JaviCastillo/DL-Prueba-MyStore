// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'Verificar: "Buscar productos por nombre"': browser => {
    browser
      .init()
      .waitForElementVisible('input')
      .setValue('input', 'Casa')
      .assert.containsText('h3', 'Casa')
      .end()
  },

  'Verificar: "Añadir productos a un carrito de compra y ver el carrito"': browser => {
    browser
      .init()
      .waitForElementVisible('input')
      .setValue('input', 'Casa')
      .waitForElementVisible('.content')
      .waitForElementVisible('.comprar')
      .click('.comprar')
      .click('.vercarrito')
      .waitForElementVisible('.titulocarrito')
      .assert.containsText('.titulocarrito', 'Estos son tus productos')
      .waitForElementVisible('.tituloproducto')
      .assert.containsText('.tituloproducto', 'Casa')
      .end()
  },

  'Verificar: "Eliminar productos del carrito"': browser => {
    browser
      .init()
      .waitForElementVisible('input')
      .setValue('input', 'Casa')
      .waitForElementVisible('.content')
      .waitForElementVisible('.comprar')
      .click('.comprar')
      .click('.vercarrito')
      .waitForElementVisible('.titulocarrito')
      .assert.containsText('.titulocarrito', 'Estos son tus productos')
      .waitForElementVisible('.tituloproducto')
      .assert.containsText('.tituloproducto', 'Casa')
      .waitForElementVisible('.quitarproducto')
      .click('.quitarproducto')
      .waitForElementNotPresent('.tituloproducto')
      .end()
  },

  'Verificar: "Iniciar sesión con mail y contraseña"': browser => {
    browser
      .init()
      .waitForElementVisible('.login')
      .click('.login')
      .waitForElementVisible('input[type=email]')
      .waitForElementVisible('input[type=password]')
      .setValue('input[type=email]', 'user1@mystore.com')
      .setValue('input[type=password]', 'password')
      .waitForElementVisible('.loguear')
      .click('.loguear')
      .waitForElementVisible('.usuario')
      .assert.containsText('.usuario', 'Usuario')
      .end()
  },
}
