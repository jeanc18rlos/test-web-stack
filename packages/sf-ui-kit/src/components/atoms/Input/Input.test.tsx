import Input from './Input';

describe('Infobar', () => {
  const onChange = () => {
    alert('Changed');
  };
  it('should render correctly', () => {
    const component = (
      <Input
        label="Label"
        placeholder="Placeholder"
        onChange={onChange}
      ></Input>
    );
    expect(component).toMatchSnapshot();
  });
});
