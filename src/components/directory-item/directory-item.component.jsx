import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

const DirectoryItem = ({ category: { imageUrl, title, route } }) => {
  const navigate = useNavigate();

  const handleOnNavigate = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={handleOnNavigate}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
