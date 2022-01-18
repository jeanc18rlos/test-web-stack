import { Selector, ClientFunction } from 'testcafe';

declare const fixture: FixtureFn;
/**
 * @feature
 */

 const nameInput = Selector('#search');

fixture(`Home Landing page`).page(`http://localhost:9000/`);


test('Type and Replace', async t => {
  await t
      .typeText(nameInput, 'Peter')
      .typeText(nameInput, 'Paker', { replace: true })
      .typeText(nameInput, 'r', { caretPos: 2 })
      .expect(nameInput.value).eql('Parker');
});
