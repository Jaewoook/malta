import styled from "styled-components";
import { Box } from "./Box";
import {
  gridAutoColumns,
  GridAutoColumnsProps,
  gridAutoFlow,
  GridAutoFlowProps,
  gridAutoRows,
  GridAutoRowsProps,
  gridGap,
  GridGapProps,
  gridColumnGap,
  GridColumnGapProps,
  gridRowGap,
  GridRowGapProps,
  gridTemplateAreas,
  GridTemplatesAreasProps,
  gridTemplateColumns,
  GridTemplatesColumnsProps,
  gridTemplateRows,
  GridTemplatesRowsProps,
} from "styled-system";

type GridProps =
  GridAutoColumnsProps & GridAutoFlowProps & GridAutoRowsProps
  & GridColumnGapProps & GridRowGapProps & GridTemplatesAreasProps
  & GridTemplatesColumnsProps & GridTemplatesRowsProps & GridGapProps;

export const Grid = styled(Box) <GridProps>`
  display: flex;
  ${gridAutoColumns}
  ${gridAutoFlow}
  ${gridAutoRows}
  ${gridColumnGap}
  ${gridRowGap}
  ${gridGap}
  ${gridTemplateAreas}
  ${gridTemplateColumns}
  ${gridTemplateRows}
`;
