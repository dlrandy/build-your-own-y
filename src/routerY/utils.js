import React from "react";

export const compilePath = (path) => {
    const keys = [];
    path = path.replace(/:(\w+)/g, (_, key)=>{
        keys.push(key);
        return "([^\\/]+)";
    });

    const source = `^(${path})`;
    const regex = new RegExp(source, 'i');
    return {regex, keys};
}


export const matchRoutes = (children, location) => {
    const matches = [];
    React.Children.forEach(children, route => {
        const {regex, keys} = compilePath(route.props.path);
        const match = location.match(regex);

        if (match) {
            const params =match.slice(2);
            matches.push({
                route: route.props.children,
                params: keys.reduce((collection, param, index) => {
                  collection[param] = params[index];
                  return collection;
                }, {}),
              });
        }
    });

    return matches[0];
}

















