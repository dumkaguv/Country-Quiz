import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height={460}
    viewBox="0 0 1000 460"
    backgroundColor="#393F6E"
    foregroundColor="#858dff"
    {...props}
  >
    <rect x="0" y="10" rx="0" ry="0" width="100%" height="60" />
    <rect x="10%" y="115" rx="0" ry="0" width="80%" height="60" />
    <rect x="5%" y="240" rx="0" ry="0" width="30%" height="80" />
    <rect x="55%" y="240" rx="0" ry="0" width="30%" height="80" />
    <rect x="5%" y="340" rx="0" ry="0" width="30%" height="80" />
    <rect x="55%" y="340" rx="0" ry="0" width="30%" height="80" />
  </ContentLoader>
);

export default Skeleton;
