import React, { useMemo } from 'react';
import type { FlexStyle, ViewStyle } from 'react-native';
import type { BaseBoxProps } from './BaseBox';
import BaseBox from './BaseBox';
export interface IBoxProps extends BaseBoxProps {
    backgroundImage?: any;
    linearGradient?: any;
    flex?: boolean | number;
    gap?: number;
    inline?: boolean;
    center?: boolean;
    flexDirection?: FlexStyle['flexDirection'];
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
    flexWrap?: boolean | FlexStyle['flexWrap'];
    flexBasis?: FlexStyle['flexBasis'];
    flexGrow?: FlexStyle['flexGrow'];
    flexShrink?: FlexStyle['flexShrink'];
}

const Box: React.FC<IBoxProps> = ({
    flex: fill,
    inline,
    center,
    flexDirection: direction,
    justifyContent: justify,
    alignItems: items,
    alignSelf: self,
    alignContent: content,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
    gap,
    style,
    ...rest
}) => {
    const flex = useMemo(() => (typeof fill === 'boolean' ? (fill ? 1 : undefined) : fill), [fill]);
    const flexDirection = useMemo(() => (inline ? 'row' : direction), [inline, direction]);
    const justifyContent = useMemo(() => {
        if (center) return 'center';
        return justify;
    }, [center, justify]);

    const alignItems = useMemo(() => {
        if (center) return 'center';
        return items;
    }, [center, items]);

    const alignSelf = useMemo(() => {
        return self;
    }, [self]);

    const alignContent = useMemo(() => {
        return content;
    }, [content]);

    const flexWrap = useMemo(() => (typeof wrap === 'boolean' ? (wrap ? 'wrap' : undefined) : wrap), [wrap]);

    const flexStyle = useMemo(
        (): ViewStyle => ({
            flex,
            flexDirection,
            justifyContent,
            alignItems,
            alignSelf,
            alignContent,
            flexWrap,
            flexBasis: basis,
            flexGrow: grow,
            flexShrink: shrink,
            gap,
        }),
        [flex, flexDirection, justifyContent, alignItems, alignSelf, alignContent, flexWrap, basis, grow, gap, shrink],
    );
    return <BaseBox style={[flexStyle, style]} {...rest} />;
};

export default Box;

export const Spacer: React.FC<IBoxProps> = (props) => {
    return <Box flex alignSelf='stretch' {...props} />;
};
