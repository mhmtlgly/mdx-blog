import * as React from "react"
import { Box, Breadcrumbs } from "@material-ui/core"
import { MdChevronRight, MdExpandMore } from "react-icons/md"
import { TreeItem, TreeView } from "@material-ui/lab"

export const FolderView = () => {
  return (
    <Box boxShadow="0 0 3px" padding={1}>
      <TreeView
        expanded={["5", "6"]}
        //   className={classes.root}
        defaultCollapseIcon={<MdExpandMore />}
        defaultExpandIcon={<MdChevronRight />}
      >
        <TreeItem nodeId="1" label="src">
          <TreeItem nodeId="2" label="components" />
          <TreeItem nodeId="3" label="images" />
          <TreeItem nodeId="4" label="pages" />
        </TreeItem>
        <TreeItem nodeId="5" label="tests">
          <TreeItem nodeId="6" label="__mocks__">
            <TreeItem nodeId="7" label="file-mock.js" />
            <TreeItem nodeId="8" label="gatsby.js" />
          </TreeItem>
          <TreeItem nodeId="9" label="jest-preprocess.js" />
          <TreeItem nodeId="10" label="setup-test-env.js" />
        </TreeItem>
        <TreeItem nodeId="11" label="jest.config.js" />
        <TreeItem nodeId="12" label="jest.setup.js" />
      </TreeView>
    </Box>
  )
}
