// import {
//   LoginScreen,
// } from '@/screens';
// import * as React from 'react';

// import { authSelector } from '@/features/auth/store/selectors';
// import { useAppSelector } from '@/hooks/useStore';
// import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
// import { RootStackParamList, RouteName } from './routeConfigs';

// const MainStack = createStackNavigator<RootStackParamList>();
// const RootNavigator = () => {
//   const { isVerify } = useAppSelector(authSelector);
//   const MainNavigations = (
//     <>
//       <MainStack.Group screenOptions={{ headerShown: false }}>
//         <MainStack.Screen name={RouteName.Dashboard} component={ProductListScreen} />
//         <MainStack.Screen name={RouteName.PageNotFound} component={PageNotFoundScreen} options={{ title: 'Oops!' }} />
//       </MainStack.Group>
//       {/*drawer left*/}
//       <MainStack.Group
//         screenOptions={{
//           presentation: 'transparentModal',
//           cardStyleInterpolator: ({ current, layouts }) => {
//             return {
//               cardStyle: {
//                 transform: [
//                   {
//                     translateX: current.progress.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [-layouts.screen.width, 0],
//                     }),
//                   },
//                 ],
//               },
//             };
//           },
//           headerShown: false,
//           gestureEnabled: false,
//         }}
//       >
//         <MainStack.Screen
//           name={RouteName.Routes}
//           component={RoutesScreen}
//           initialParams={{ position: 'left', keyWidth: 'width.menus.screen', showButtonBack: false }}
//         />
//       </MainStack.Group>
//       {/*/!*drawer right*!/*/}
//       <MainStack.Group
//         screenOptions={{
//           presentation: 'transparentModal',
//           headerShown: false,
//           gestureEnabled: false,
//           ...TransitionPresets.SlideFromRightIOS,
//         }}
//       >
//         <MainStack.Screen
//           name={RouteName.ComboDetail}
//           component={ComboDetailScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.productDetail.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.DiscountCode}
//           component={DiscountCodeScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.discountCode.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.PromotionDetail}
//           component={PromotionDetailScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.discountCode.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.UpdateCustomerInfo}
//           component={UpdateCustomerInfoScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.update_customer.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.AddNewCustomer}
//           component={AddNewCustomerScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.add_new_customer.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.SearchCustomer}
//           component={SearchCustomerScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.searchCustomer.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.Fee}
//           component={FeeScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.listFee.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.FeeDetail}
//           component={FeeDetailScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.listFee.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.ShiftSummary}
//           component={ShiftSummaryScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.shiftSummary.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen name={RouteName.CashbookManagement} component={CashbookManagementScreen} />
//         <MainStack.Screen
//           name={RouteName.DeliveryOrder}
//           component={DeliveryOrderScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.deliveryOrder.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.Payment}
//           component={PaymentScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.shiftSummary.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen name={RouteName.OrderDetail} component={OrderDetailScreen} />
//         <MainStack.Screen
//           name={RouteName.CreateCashbook}
//           component={CreateCashbookScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.createCashbook.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.AreaTable}
//           component={AreaTableScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.areaTable.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.Notification}
//           component={NotificationScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.notification.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.ProductBarCodeManagement}
//           component={ProductBarCodeScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.productBarCode.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.ProductManagement}
//           component={ProductManagementScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.productManagement.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.ProductDetailOfManagementScreen}
//           component={ProductDetailOfManagementScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.productDetailManagement.screen', showButtonBack: true }}
//         />
//         <MainStack.Screen
//           name={RouteName.CreateReservation}
//           component={CreateReservationScreen}
//           initialParams={{ position: 'right', keyWidth: 'width.createReservation.screen', showButtonBack: true }}
//         />
//       </MainStack.Group>
//       {/*/!*drawer modal*!/*/}
//       <MainStack.Group
//         screenOptions={{
//           presentation: 'transparentModal',
//           headerShown: false,
//           gestureEnabled: false,
//           ...TransitionPresets.BottomSheetAndroid,
//         }}
//       >
//         <MainStack.Screen
//           name={RouteName.Demo}
//           component={DemoScreen}
//           initialParams={{ position: 'modal', keyWidth: 'width.demo.screen' }}
//         />
//         <MainStack.Screen name={RouteName.ShiftManagement} component={ShiftManagementScreen} />
//         <MainStack.Screen
//           name={RouteName.InventoryChecking}
//           component={InventoryCheckingScreen}
//           initialParams={{ position: 'modal', keyWidth: 'width.inventory_checking.screen' }}
//         />
//         <MainStack.Screen
//           name={RouteName.EndShiftInventoryChecking}
//           component={EndShiftInventoryCheckingScreen}
//           initialParams={{ position: 'modal', keyWidth: 'width.inventory_checking.screen' }}
//         />
//         <MainStack.Screen name={RouteName.Settings} component={SettingsScreen} />
//         <MainStack.Screen
//           name={RouteName.OrderManagement}
//           component={OrderManagementScreen}
//           initialParams={{ position: 'modal', keyWidth: 'width.orderManagement.screen' }}
//         />
//         <MainStack.Screen name={RouteName.Kitchen} component={KitchenScreen} />
//         <MainStack.Screen
//           name={RouteName.ReservationManagement}
//           component={ReservationManagementScreen}
//           initialParams={{ position: 'modal', keyWidth: 'width.reservationManagement.screen' }}
//         />
//       </MainStack.Group>
//     </>
//   );
//   return (
//     <MainStack.Navigator initialRouteName={isVerify ? RouteName.Dashboard : RouteName.Authenticate}>
//       {isVerify ? (
//         MainNavigations
//       ) : (
//         <>
//           <MainStack.Screen
//             options={{ headerShown: false }}
//             name={RouteName.Authenticate}
//             component={AuthenticateScreen}
//           />
//           <MainStack.Group
//             screenOptions={{
//               presentation: 'transparentModal',
//               headerShown: false,
//               gestureEnabled: true,
//               ...TransitionPresets.BottomSheetAndroid,
//             }}
//           >
//             <MainStack.Screen
//               name={RouteName.InventoryChecking}
//               component={InventoryCheckingScreen}
//               initialParams={{ position: 'modal', keyWidth: 'width.inventory_checking.screen' }}
//             />
//           </MainStack.Group>
//         </>
//       )}
//     </MainStack.Navigator>
//   );
// };

// export default RootNavigator;
