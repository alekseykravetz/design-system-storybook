export default function AvatarImageUrl({
  width = '100px',
  height = '100px',
  src = 'https://picsum.photos/100/100',
}) {
  const avatarStyle = {
    width,
    height,
    borderRadius: '50%',
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return <div style={avatarStyle}></div>;
}
