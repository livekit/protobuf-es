// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// Author: benjy@google.com (Benjy Weinberger)
//  Based on original Protocol Buffers design by
//  Sanjay Ghemawat, Jeff Dean, and others.
//
// A proto file used to test the "custom options" feature of google.protobuf.

// @generated by protoc-gen-es v0.5.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_custom_options.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

// We don't put this in a package within proto2 because we need to make sure
// that the generated code doesn't depend on being in the proto2 namespace.

import { Any, FileOptions, proto2 } from "@bufbuild/protobuf";

/**
 * @generated from enum protobuf_unittest.MethodOpt1
 */
export const MethodOpt1 = proto2.makeEnum(
  "protobuf_unittest.MethodOpt1",
  [
    {no: 1, name: "METHODOPT1_VAL1"},
    {no: 2, name: "METHODOPT1_VAL2"},
  ],
);

/**
 * @generated from enum protobuf_unittest.AggregateEnum
 */
export const AggregateEnum = proto2.makeEnum(
  "protobuf_unittest.AggregateEnum",
  [
    {no: 1, name: "VALUE"},
  ],
);

/**
 * A test message with custom options at all possible locations (and also some
 * regular options, to make sure they interact nicely).
 *
 * @generated from message protobuf_unittest.TestMessageWithCustomOptions
 */
export const TestMessageWithCustomOptions = proto2.makeMessageType(
  "protobuf_unittest.TestMessageWithCustomOptions",
  () => [
    { no: 1, name: "field1", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "oneof_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "AnOneof" },
    { no: 3, name: "map_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * @generated from enum protobuf_unittest.TestMessageWithCustomOptions.AnEnum
 */
export const TestMessageWithCustomOptions_AnEnum = proto2.makeEnum(
  "protobuf_unittest.TestMessageWithCustomOptions.AnEnum",
  [
    {no: 1, name: "ANENUM_VAL1"},
    {no: 2, name: "ANENUM_VAL2"},
  ],
);

/**
 * A test RPC service with custom options at all possible locations (and also
 * some regular options, to make sure they interact nicely).
 *
 * @generated from message protobuf_unittest.CustomOptionFooRequest
 */
export const CustomOptionFooRequest = proto2.makeMessageType(
  "protobuf_unittest.CustomOptionFooRequest",
  [],
);

/**
 * @generated from message protobuf_unittest.CustomOptionFooResponse
 */
export const CustomOptionFooResponse = proto2.makeMessageType(
  "protobuf_unittest.CustomOptionFooResponse",
  [],
);

/**
 * @generated from message protobuf_unittest.CustomOptionFooClientMessage
 */
export const CustomOptionFooClientMessage = proto2.makeMessageType(
  "protobuf_unittest.CustomOptionFooClientMessage",
  [],
);

/**
 * @generated from message protobuf_unittest.CustomOptionFooServerMessage
 */
export const CustomOptionFooServerMessage = proto2.makeMessageType(
  "protobuf_unittest.CustomOptionFooServerMessage",
  [],
);

/**
 * @generated from message protobuf_unittest.DummyMessageContainingEnum
 */
export const DummyMessageContainingEnum = proto2.makeMessageType(
  "protobuf_unittest.DummyMessageContainingEnum",
  [],
);

/**
 * @generated from enum protobuf_unittest.DummyMessageContainingEnum.TestEnumType
 */
export const DummyMessageContainingEnum_TestEnumType = proto2.makeEnum(
  "protobuf_unittest.DummyMessageContainingEnum.TestEnumType",
  [
    {no: 22, name: "TEST_OPTION_ENUM_TYPE1"},
    {no: -23, name: "TEST_OPTION_ENUM_TYPE2"},
  ],
);

/**
 * @generated from message protobuf_unittest.DummyMessageInvalidAsOptionType
 */
export const DummyMessageInvalidAsOptionType = proto2.makeMessageType(
  "protobuf_unittest.DummyMessageInvalidAsOptionType",
  [],
);

/**
 * @generated from message protobuf_unittest.CustomOptionMinIntegerValues
 */
export const CustomOptionMinIntegerValues = proto2.makeMessageType(
  "protobuf_unittest.CustomOptionMinIntegerValues",
  [],
);

/**
 * @generated from message protobuf_unittest.CustomOptionMaxIntegerValues
 */
export const CustomOptionMaxIntegerValues = proto2.makeMessageType(
  "protobuf_unittest.CustomOptionMaxIntegerValues",
  [],
);

/**
 * @generated from message protobuf_unittest.CustomOptionOtherValues
 */
export const CustomOptionOtherValues = proto2.makeMessageType(
  "protobuf_unittest.CustomOptionOtherValues",
  [],
);

/**
 * @generated from message protobuf_unittest.SettingRealsFromPositiveInts
 */
export const SettingRealsFromPositiveInts = proto2.makeMessageType(
  "protobuf_unittest.SettingRealsFromPositiveInts",
  [],
);

/**
 * @generated from message protobuf_unittest.SettingRealsFromNegativeInts
 */
export const SettingRealsFromNegativeInts = proto2.makeMessageType(
  "protobuf_unittest.SettingRealsFromNegativeInts",
  [],
);

/**
 * @generated from message protobuf_unittest.ComplexOptionType1
 */
export const ComplexOptionType1 = proto2.makeMessageType(
  "protobuf_unittest.ComplexOptionType1",
  () => [
    { no: 1, name: "foo", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "foo2", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "foo3", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "foo4", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
  ],
);

/**
 * @generated from message protobuf_unittest.ComplexOptionType2
 */
export const ComplexOptionType2 = proto2.makeMessageType(
  "protobuf_unittest.ComplexOptionType2",
  () => [
    { no: 1, name: "bar", kind: "message", T: ComplexOptionType1, opt: true },
    { no: 2, name: "baz", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "fred", kind: "message", T: ComplexOptionType2_ComplexOptionType4, opt: true },
    { no: 4, name: "barney", kind: "message", T: ComplexOptionType2_ComplexOptionType4, repeated: true },
  ],
);

/**
 * @generated from message protobuf_unittest.ComplexOptionType2.ComplexOptionType4
 */
export const ComplexOptionType2_ComplexOptionType4 = proto2.makeMessageType(
  "protobuf_unittest.ComplexOptionType2.ComplexOptionType4",
  () => [
    { no: 1, name: "waldo", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "ComplexOptionType2_ComplexOptionType4"},
);

/**
 * @generated from message protobuf_unittest.ComplexOptionType3
 */
export const ComplexOptionType3 = proto2.makeMessageType(
  "protobuf_unittest.ComplexOptionType3",
  () => [
    { no: 1, name: "moo", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "complexoptiontype5", kind: "message", T: ComplexOptionType3_ComplexOptionType5, opt: true },
  ],
);

/**
 * @generated from message protobuf_unittest.ComplexOptionType3.ComplexOptionType5
 */
export const ComplexOptionType3_ComplexOptionType5 = proto2.makeMessageType(
  "protobuf_unittest.ComplexOptionType3.ComplexOptionType5",
  () => [
    { no: 3, name: "plugh", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "ComplexOptionType3_ComplexOptionType5"},
);

/**
 * @generated from message protobuf_unittest.ComplexOpt6
 */
export const ComplexOpt6 = proto2.makeMessageType(
  "protobuf_unittest.ComplexOpt6",
  () => [
    { no: 7593951, name: "xyzzy", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * Note that we try various different ways of naming the same extension.
 *
 * @generated from message protobuf_unittest.VariousComplexOptions
 */
export const VariousComplexOptions = proto2.makeMessageType(
  "protobuf_unittest.VariousComplexOptions",
  [],
);

/**
 * @generated from message protobuf_unittest.AggregateMessageSet
 */
export const AggregateMessageSet = proto2.makeMessageType(
  "protobuf_unittest.AggregateMessageSet",
  [],
);

/**
 * @generated from message protobuf_unittest.AggregateMessageSetElement
 */
export const AggregateMessageSetElement = proto2.makeMessageType(
  "protobuf_unittest.AggregateMessageSetElement",
  () => [
    { no: 1, name: "s", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * A helper type used to test aggregate option parsing
 *
 * @generated from message protobuf_unittest.Aggregate
 */
export const Aggregate = proto2.makeMessageType(
  "protobuf_unittest.Aggregate",
  () => [
    { no: 1, name: "i", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "s", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "sub", kind: "message", T: Aggregate, opt: true },
    { no: 4, name: "file", kind: "message", T: FileOptions, opt: true },
    { no: 5, name: "mset", kind: "message", T: AggregateMessageSet, opt: true },
    { no: 6, name: "any", kind: "message", T: Any, opt: true },
  ],
);

/**
 * @generated from message protobuf_unittest.AggregateMessage
 */
export const AggregateMessage = proto2.makeMessageType(
  "protobuf_unittest.AggregateMessage",
  () => [
    { no: 1, name: "fieldname", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * Test custom options for nested type.
 *
 * @generated from message protobuf_unittest.NestedOptionType
 */
export const NestedOptionType = proto2.makeMessageType(
  "protobuf_unittest.NestedOptionType",
  [],
);

/**
 * @generated from enum protobuf_unittest.NestedOptionType.NestedEnum
 */
export const NestedOptionType_NestedEnum = proto2.makeEnum(
  "protobuf_unittest.NestedOptionType.NestedEnum",
  [
    {no: 1, name: "NESTED_ENUM_VALUE", localName: "VALUE"},
  ],
);

/**
 * @generated from message protobuf_unittest.NestedOptionType.NestedMessage
 */
export const NestedOptionType_NestedMessage = proto2.makeMessageType(
  "protobuf_unittest.NestedOptionType.NestedMessage",
  () => [
    { no: 1, name: "nested_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "NestedOptionType_NestedMessage"},
);

/**
 * Custom message option that has a required enum field.
 * WARNING: this is strongly discouraged!
 *
 * @generated from message protobuf_unittest.OldOptionType
 */
export const OldOptionType = proto2.makeMessageType(
  "protobuf_unittest.OldOptionType",
  () => [
    { no: 1, name: "value", kind: "enum", T: proto2.getEnumType(OldOptionType_TestEnum) },
  ],
);

/**
 * @generated from enum protobuf_unittest.OldOptionType.TestEnum
 */
export const OldOptionType_TestEnum = proto2.makeEnum(
  "protobuf_unittest.OldOptionType.TestEnum",
  [
    {no: 0, name: "OLD_VALUE"},
  ],
);

/**
 * Updated version of the custom option above.
 *
 * @generated from message protobuf_unittest.NewOptionType
 */
export const NewOptionType = proto2.makeMessageType(
  "protobuf_unittest.NewOptionType",
  () => [
    { no: 1, name: "value", kind: "enum", T: proto2.getEnumType(NewOptionType_TestEnum) },
  ],
);

/**
 * @generated from enum protobuf_unittest.NewOptionType.TestEnum
 */
export const NewOptionType_TestEnum = proto2.makeEnum(
  "protobuf_unittest.NewOptionType.TestEnum",
  [
    {no: 0, name: "OLD_VALUE"},
    {no: 1, name: "NEW_VALUE"},
  ],
);

/**
 * Test message using the "required_enum_opt" option defined above.
 *
 * @generated from message protobuf_unittest.TestMessageWithRequiredEnumOption
 */
export const TestMessageWithRequiredEnumOption = proto2.makeMessageType(
  "protobuf_unittest.TestMessageWithRequiredEnumOption",
  [],
);

