export default function Header({ title, imageSrc, alt }) {
  return (
    <div id='header'>
      <img src={imageSrc} alt={alt} />
      <h1>{title}</h1>
    </div>
  );
}
