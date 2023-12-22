import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "../components/Search/Search";
import Header from "../components/barra_header/Header";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const NewsItems = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const title = "Arbol de Jade";
  const content = `La planta de jade (Crassula ovata), también conocida como 'árbol del dinero' o 'árbol de la suerte', es una planta suculenta originaria de África del Sur. Aquí tienes algunos datos interesantes sobre la planta de jade:

  Nombre Científico: Su nombre científico es Crassula ovata. Pertenece al género Crassula, que incluye muchas otras suculentas.
  
  Aspecto Distintivo: La planta de jade es conocida por sus hojas carnosas, ovaladas y brillantes que crecen en pares opuestos. Las hojas pueden tener tonalidades que van desde el verde oscuro hasta el verde claro, y algunas variedades pueden mostrar bordes rojos.
  
  Simbolismo de Buena Fortuna: En algunas culturas, se cree que la planta de jade atrae la buena fortuna, la prosperidad y la amistad. Se coloca comúnmente en hogares y oficinas con la esperanza de atraer energía positiva.
  
  Fácil Cuidado: Es una planta suculenta resistente y de bajo mantenimiento. Tolera condiciones de poca luz y se adapta bien a ambientes de interior. Además, no requiere riego frecuente, ya que puede almacenar agua en sus hojas.
  
  Duración de Ciclo: La planta de jade puede crecer de 25 a 45 anios.


  `;

  return (
    <div>
      <SearchBar /> 
      <Header />
    <Card
      sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row" }}
    >
      <CardMedia
        component="img"
        alt="News Image"
        height={isSmallScreen ? "140" : "auto"}
        image={"https://images.pexels.com/photos/6045046/pexels-photo-6045046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        sx={{ width: isSmallScreen ? "100%" : 140, objectFit: "cover" }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" component="div" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            whiteSpace: "break-spaces",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxHeight: expanded ? "none" : 100,
          }}
        >
          {content}
        </Typography>
        {!expanded && (
          <Button onClick={handleExpand} size="small" sx={{ mt: 1 }}>
            Leer más
          </Button>
        )}
      </CardContent>
    </Card>
    </div>
  );
};


NewsItems.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default NewsItems;
