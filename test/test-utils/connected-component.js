const connectedName = component => component.type.displayName.replace(/.*\(/, '').slice(0, -1)

export default connectedName
