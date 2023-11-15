import React, { useMemo } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { IBaseCmpColor, Spacing } from './Theme/type';

export interface BaseBoxProps extends ViewProps {
    as?: React.ReactElement;
    height?: ViewStyle['height'];
    minH?: ViewStyle['minHeight'];
    maxH?: ViewStyle['maxHeight'];
    width?: ViewStyle['width'];
    minW?: ViewStyle['minWidth'];
    maxW?: ViewStyle['maxWidth'];
    m?: ViewStyle['margin'];
    mt?: ViewStyle['marginTop'];
    mr?: ViewStyle['marginRight'];
    mb?: ViewStyle['marginBottom'];
    ml?: ViewStyle['marginLeft'];
    ms?: ViewStyle['marginStart'];
    me?: ViewStyle['marginEnd'];
    mX?: ViewStyle['marginHorizontal'];
    mY?: ViewStyle['marginVertical'];
    p?: ViewStyle['padding'];
    pt?: ViewStyle['paddingTop'];
    pr?: ViewStyle['paddingRight'];
    pb?: ViewStyle['paddingBottom'];
    pl?: ViewStyle['paddingLeft'];
    ps?: ViewStyle['paddingStart'];
    pe?: ViewStyle['paddingEnd'];
    pX?: ViewStyle['paddingHorizontal'];
    pY?: ViewStyle['paddingVertical'];
    borderStyle?: ViewStyle['borderStyle'];
    borderWidth?: ViewStyle['borderWidth'];
    borderTop?: ViewStyle['borderTopWidth'];
    borderRight?: ViewStyle['borderRightWidth'];
    borderBottom?: ViewStyle['borderBottomWidth'];
    borderLeft?: ViewStyle['borderLeftWidth'];
    borderStart?: ViewStyle['borderStartWidth'];
    borderEnd?: ViewStyle['borderEndWidth'];
    borderColor?: ViewStyle['borderColor'];
    borderTopColor?: ViewStyle['borderTopColor'];
    borderRightColor?: ViewStyle['borderRightColor'];
    borderBottomColor?: ViewStyle['borderBottomColor'];
    borderLeftColor?: ViewStyle['borderLeftColor'];
    borderStartColor?: ViewStyle['borderStartColor'];
    borderEndColor?: ViewStyle['borderEndColor'];
    borderRadius?: ViewStyle['borderRadius'];
    topLeftRadius?: ViewStyle['borderTopLeftRadius'];
    topRightRadius?: ViewStyle['borderTopRightRadius'];
    bottomLeftRadius?: ViewStyle['borderTopLeftRadius'];
    bottomRightRadius?: ViewStyle['borderBottomRightRadius'];
    topStartRadius?: ViewStyle['borderTopStartRadius'];
    topEndRadius?: ViewStyle['borderTopEndRadius'];
    bottomStartRadius?: ViewStyle['borderBottomStartRadius'];
    bottomEndRadius?: ViewStyle['borderBottomEndRadius'];
    position?: ViewStyle['position'];
    top?: ViewStyle['top'];
    right?: ViewStyle['right'];
    bottom?: ViewStyle['bottom'];
    left?: ViewStyle['left'];
    start?: ViewStyle['start'];
    end?: ViewStyle['end'];
    backgroundColor?: IBaseCmpColor;
    opacity?: ViewStyle['opacity'];
    zIndex?: ViewStyle['zIndex'];
    overflow?: ViewStyle['overflow'];
    shadowColor?: ViewStyle['shadowColor'];
    shadowOpacity?: ViewStyle['shadowOpacity'];
    elevation?: number;
    notSpacingWidth?: boolean;
    notSpacingHeight?: boolean;
}

const Box: React.FC<BaseBoxProps> = ({
    as,
    height,
    minH,
    maxH,
    width,
    minW,
    maxW,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    me,
    mX,
    mY,
    p,
    pt,
    pr,
    pb,
    pl,
    ps,
    pe,
    pX,
    pY,
    borderStyle,
    borderWidth: border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderStart,
    borderEnd,
    borderColor,
    borderTopColor,
    borderRightColor,
    borderBottomColor,
    borderLeftColor,
    borderStartColor,
    borderEndColor,
    borderRadius: radius,
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    bottomRightRadius,
    topStartRadius,
    topEndRadius,
    bottomStartRadius,
    bottomEndRadius,
    position,
    top,
    right,
    bottom,
    left,
    start,
    end,
    backgroundColor: bg,
    opacity,
    zIndex,
    overflow,
    style,
    shadowColor,
    shadowOpacity,
    elevation,
    notSpacingWidth = false,
    notSpacingHeight = false,
    ...rest
}) => {

    const spacingFunc = (space: any) => {
        if (Number.isInteger(space)) return (space as number);
        return space;
    };

    const boxStyle = useMemo(() => {
        const styleObj: ViewStyle = {};
        styleObj.height = notSpacingHeight ? height : spacingFunc(height);
        styleObj.minHeight = spacingFunc(minH);
        styleObj.maxHeight = spacingFunc(maxH);
        styleObj.width = notSpacingWidth ? width : spacingFunc(width);
        styleObj.minWidth = spacingFunc(minW);
        styleObj.maxWidth = spacingFunc(maxW);
        styleObj.margin = spacingFunc(m);
        styleObj.marginTop = spacingFunc(mt);
        styleObj.marginRight = spacingFunc(mr);
        styleObj.marginBottom = spacingFunc(mb);
        styleObj.marginLeft = spacingFunc(ml);
        styleObj.marginStart = spacingFunc(ms);
        styleObj.marginEnd = spacingFunc(me);
        styleObj.marginHorizontal = spacingFunc(mX);
        styleObj.marginVertical = spacingFunc(mY);
        styleObj.padding = spacingFunc(p);
        styleObj.paddingTop = spacingFunc(pt);
        styleObj.paddingRight = spacingFunc(pr);
        styleObj.paddingBottom = spacingFunc(pb);
        styleObj.paddingLeft = spacingFunc(pl);
        styleObj.paddingStart = spacingFunc(ps);
        styleObj.paddingEnd = spacingFunc(pe);
        styleObj.paddingHorizontal = spacingFunc(pX);
        styleObj.paddingVertical = spacingFunc(pY);
        styleObj.borderStyle = borderStyle;
        styleObj.borderWidth = border;
        styleObj.borderTopWidth = borderTop;
        styleObj.borderRightWidth = borderRight;
        styleObj.borderBottomWidth = borderBottom;
        styleObj.borderLeftWidth = borderLeft;
        styleObj.borderStartWidth = borderStart;
        styleObj.borderEndWidth = borderEnd;
        styleObj.borderColor = borderColor;
        styleObj.borderTopColor = borderTopColor;
        styleObj.borderRightColor = borderRightColor;
        styleObj.borderBottomColor = borderBottomColor;
        styleObj.borderLeftColor = borderLeftColor;
        styleObj.borderStartColor = borderStartColor;
        styleObj.borderEndColor = borderEndColor;
        styleObj.borderRadius = radius;
        styleObj.borderTopLeftRadius = topLeftRadius;
        styleObj.borderTopRightRadius = topRightRadius;
        styleObj.borderBottomLeftRadius = bottomLeftRadius;
        styleObj.borderBottomRightRadius = bottomRightRadius;
        styleObj.borderTopStartRadius = topStartRadius;
        styleObj.borderTopEndRadius = topEndRadius;
        styleObj.borderBottomStartRadius = bottomStartRadius;
        styleObj.borderBottomEndRadius = bottomEndRadius;
        styleObj.position = position;
        styleObj.top = spacingFunc(top);
        styleObj.right = spacingFunc(right);
        styleObj.bottom = spacingFunc(bottom);
        styleObj.left = spacingFunc(left);
        styleObj.start = start;
        styleObj.end = end;
        styleObj.backgroundColor = bg;
        styleObj.opacity = opacity;
        styleObj.zIndex = zIndex;
        styleObj.overflow = overflow;
        styleObj.shadowColor = shadowColor;
        styleObj.shadowOpacity = shadowOpacity;
        styleObj.elevation = elevation;
        return styleObj;
    }, [
        height,
        minH,
        maxH,
        width,
        minW,
        maxW,
        m,
        mt,
        mr,
        mb,
        ml,
        ms,
        me,
        mX,
        mY,
        p,
        pt,
        pr,
        pb,
        pl,
        ps,
        pe,
        pX,
        pY,
        borderStyle,
        border,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        borderStart,
        borderEnd,
        borderColor,
        borderTopColor,
        borderRightColor,
        borderBottomColor,
        borderLeftColor,
        borderStartColor,
        borderEndColor,
        radius,
        topLeftRadius,
        topRightRadius,
        bottomLeftRadius,
        bottomRightRadius,
        topStartRadius,
        topEndRadius,
        bottomStartRadius,
        bottomEndRadius,
        position,
        top,
        right,
        bottom,
        left,
        start,
        end,
        bg,
        opacity,
        zIndex,
        overflow,
        spacingFunc,
    ]);

    if (as) {
        return React.cloneElement(as, {
            style: [boxStyle, style, as.props.style],
            ...rest,
        });
    }
    return <View style={[boxStyle, style]} {...rest} />;
};

export default React.memo(Box);
