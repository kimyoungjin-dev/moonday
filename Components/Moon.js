import React from "react";
import styled from "styled-components/native";
import MaskedView from "@react-native-masked-view/masked-view";

const RADIUS = 120;
const MARGIN_TOP = 200;
const MARGIN_LEFT = 0;

const Container = styled.View`
  width: 100%;
  height: ${RADIUS * 2}px;
  margin-top: ${MARGIN_TOP}px;
  margin-left: ${MARGIN_LEFT}px;
  justify-content: center;
  align-items: center;
`;
const MoonContainer = styled.View`
  width: ${RADIUS * 2}px;
  height: ${RADIUS * 2}px;
  border-radius: ${RADIUS}px;
`;
const ArcShadow = styled.View`
  width: ${RADIUS * 2}px;
  height: ${RADIUS * 2}px;
  border-radius: ${RADIUS}px;
  position: absolute;
`;
const HalfShadow = styled.View`
  width: ${RADIUS}px;
  height: ${RADIUS * 2}px;
  position: absolute;
`;
const MoonImage = styled.Image`
  width: ${RADIUS * 2}px;
  height: ${RADIUS * 2}px;
`;
const MoonOpacity = styled.Image`
  width: ${RADIUS * 2}px;
  height: ${RADIUS * 2}px;
  position: absolute;
  z-index: 9;
  opacity: 0.1;
`;
const View = styled.View``;

const Moon = ({ data: { illumination }, leftMoon }) => {
  return (
    <Container>
      <MoonOpacity source={require("../assets/moon.png")} />

      {illumination && (
        <MoonContainer>
          <MoonImage source={require("../assets/moon.png")} />

          <MaskedView
            style={{
              width: RADIUS * 2,
              height: RADIUS * 2,
              position: "absolute",
              backgroundColor: "black",
            }}
            maskElement={
              <View
                style={{
                  width: RADIUS * 2,
                  height: RADIUS * 2,
                  borderRadius: RADIUS,
                  backgroundColor: "black",
                }}
              />
            }
          >
            <HalfShadow
              style={{
                backgroundColor: leftMoon ? "transparent" : "black",
                left: 0,
              }}
            />
          </MaskedView>

          <MaskedView
            style={{
              width: RADIUS * 2,
              height: RADIUS * 2,
              position: "absolute",
            }}
            maskElement={
              <View
                style={{
                  width: RADIUS * 2,
                  height: RADIUS * 2,
                  borderRadius: RADIUS,
                  backgroundColor: "black",
                }}
              />
            }
          >
            <HalfShadow
              style={{
                backgroundColor: leftMoon ? "black" : "transparent",
                left: RADIUS,
              }}
            />
          </MaskedView>

          {illumination < 50 ? (
            <ArcShadow
              style={{
                transform: [
                  {
                    scaleX:
                      illumination < 50
                        ? Math.abs(
                            1 - illumination / 100 - (0.5 * illumination) / 100
                          )
                        : illumination / 100,
                  },
                ],
                backgroundColor: "black",
              }}
            />
          ) : (
            <ArcShadow>
              <MaskedView
                style={{
                  width: 200,
                  height: 200,
                }}
                maskElement={
                  <ArcShadow
                    style={{
                      transform: [
                        {
                          scaleX:
                            illumination < 50
                              ? Math.abs(
                                  1 -
                                    illumination / 100 -
                                    (0.5 * illumination) / 100
                                )
                              : illumination / 100,
                        },
                      ],
                      backgroundColor: "black",
                    }}
                  />
                }
              >
                <MoonImage
                  source={require("../assets/moon.png")}
                  resizeMode="cover"
                />
              </MaskedView>
            </ArcShadow>
          )}
        </MoonContainer>
      )}
    </Container>
  );
};

export default Moon;
