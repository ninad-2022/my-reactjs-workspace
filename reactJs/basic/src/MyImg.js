import React from "react";
class MyImg extends React.Component {
  render() {
    return (
      <>
        <Checkbox
          ref={(el) => (SkipCheckBox.current[index] = el)}
          onChange={(e) => {
            selectMapping(e, index);
          }}
          id={"dataResultSkip" + index}
          value={header}
          checked={initialMap.values[header] === "suggested_name"}
        />

        <td className="value skip">
          <input
            ref={(el) => (SkipCheckBox.current[index] = el)}
            onMouseDown={(e) => {
              selectMapping(e, index);
            }}
            className="form-check-input"
            type="checkbox"
            id={"dataResultSkip" + index}
            value={header}
            defaultChecked={
              initialMap.values[header] === "suggested_name" ? true : false
            }
          />
        </td>
      </>
    );
  }
}

export default MyImg;
