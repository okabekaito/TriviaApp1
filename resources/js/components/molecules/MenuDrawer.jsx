import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import React, { VFC } from "react"

export const MenuDrawer = (props) => {
    const { onClose,isOpen,onClickHome,onClickHelp,onClickLogin } = props;
    
    return (
        <>
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100" >
                        <Button w="100%" onClick={onClickHome}>トップ</Button>
                        <Button w="100%" onClick={onClickHelp}>ヘルプ</Button>
                        <Button w="100%" onClick={onClickLogin}>ログイン</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        </>
    )
}
