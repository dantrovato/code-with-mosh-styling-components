import ExpandableText from "./components/ExpandableText";

const text =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem necessitatibus eligendi itaque libero, laboriosam officiis sunt ex, nam facilis deserunt a temporibus, ea consectetur quis odit mollitia eius enim! Iusto, dolores. Veniam rem ipsam libero sint eos velit porro, nam voluptatem cupiditate, aliquam dolore molestiae id. Culpa, saepe tempore. Maiores ex corporis, cumque, assumenda pariatur veniam voluptas sint dolore fugit minus laboriosam quaerat, tempore at accusantium consequatur aut aperiam rem omnis laudantium natus repellendus eius? Natus ad quo perspiciatis aperiam non repudiandae deleniti veniam sed pariatur. Neque tenetur voluptates fuga quibusdam repellat, hic ipsa assumenda vitae aperiam non dignissimos et?";

const App = () => {
  return (
    <div>
      <ExpandableText maxChars={10}>{text}</ExpandableText>
    </div>
  );
};

export default App;
