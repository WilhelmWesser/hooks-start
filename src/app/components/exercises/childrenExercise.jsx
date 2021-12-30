import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const ChildrenWrapper = ({ children }) => {
    const childArr = React.Children.toArray(children);
    return React.Children.map(childArr, (child) => {
        const config = {
            value: `${Number(child.key.replace(".", "")) + 1} Компонент списка`
        };
        return React.cloneElement(child, config);
    });
};
ChildrenWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ChildrenWrapper>
                <Component />
                <Component />
                <Component />
            </ChildrenWrapper>
        </CollapseWrapper>
    );
};

const Component = ({ value }) => {
    return <div>{value}</div>;
};
Component.propTypes = {
    value: PropTypes.string
};

export default ChildrenExercise;
