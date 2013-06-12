/*global define*/
define([
        './defaultValue',
        './freezeObject'
    ], function(
        defaultValue,
        freezeObject) {
    "use strict";

    /**
     * A vertex format defines what attributes make up a vertex.  A VertexFormat can be provided
     * to a {@link Geometry} to request that certain properties be computed, e.g., just position,
     * position and normal, etc.
     *
     * @param {Object} [options=undefined] An object with boolean properties corresponding to VertexFormat properties as shown in the code example.
     *
     * @alias VertexFormat
     * @constructor
     *
     * @example
     * // Create a vertex format with position and 2D texture coordinate attributes.
     * var format = new VertexFormat({
     *   position : true,
     *   st : true
     * });
     *
     * @see Geometry.attributes
     */
    var VertexFormat = function(options) {
        options = defaultValue(options, defaultValue.EMPTY_OBJECT);

        /**
         * When <code>true</code>, the vertex has a 3D position attribute.
         * <p>
         * 64-bit floating-point (for precision).  3 components per attribute.
         * </p>
         *
         * @type Boolean
         *
         * @default false
         */
        this.position = defaultValue(options.position, false);

        /**
         * When <code>true</code>, the vertex has a normal attribute (normalized), which is commonly used for lighting.
         * <p>
         * 32-bit floating-point.  3 components per attribute.
         * </p>
         *
         * @type Boolean
         *
         * @default false
         */
        this.normal = defaultValue(options.normal, false);

        /**
         * When <code>true</code>, the vertex has a 2D texture coordinate attribute.
         * <p>
         * 32-bit floating-point.  2 components per attribute
         * </p>
         *
         * @type Boolean
         *
         * @default false
         */
        this.st = defaultValue(options.st, false);

        /**
         * When <code>true</code>, the vertex has a binormal attribute (normalized), which is used for tangent-space effects like bump mapping.
         * <p>
         * 32-bit floating-point.  3 components per attribute.
         * </p>
         *
         * @type Boolean
         *
         * @default false
         */
        this.binormal = defaultValue(options.binormal, false);

        /**
         * When <code>true</code>, the vertex has a tangent attribute (normalized), which is used for tangent-space effects like bump mapping.
         * <p>
         * 32-bit floating-point.  3 components per attribute.
         * </p>
         *
         * @type Boolean
         *
         * @default false
         */
        this.tangent = defaultValue(options.tangent, false);
    };

    /**
     * An immutable vertex format with position, normal, and st attributes.
     *
     * @memberof VertexFormat
     *
     * @see VertexFormat#position
     * @see VertexFormat#normal
     * @see VertexFormat#st
     */
    VertexFormat.DEFAULT = freezeObject(new VertexFormat({
        position : true,
        normal : true,
        st : true
    }));

    /**
     * An immutable vertex format with only a position attribute.
     *
     * @memberof VertexFormat
     *
     * @see VertexFormat#position
     */
    VertexFormat.POSITION_ONLY = freezeObject(new VertexFormat({
        position : true
    }));

    /**
     * An immutable vertex format with position and normal attributes.
     * This is compatible with per-geometry color appearances like {@link PerGeometryColorClosedTranslucentAppearance}.
     *
     * @memberof VertexFormat
     *
     * @see VertexFormat#position
     * @see VertexFormat#normal
     */
    VertexFormat.POSITION_AND_NORMAL = freezeObject(new VertexFormat({
        position : true,
        normal : true
    }));

    /**
     * An immutable vertex format with position and st attributes.
     * This is compatible with {@link EllipsoidSurfaceAppearance}.
     *
     * @memberof VertexFormat
     *
     * @see VertexFormat#position
     * @see VertexFormat#st
     */
    VertexFormat.POSITION_AND_ST = freezeObject(new VertexFormat({
        position : true,
        st : true
    }));

    /**
     * An immutable vertex format with all well-known attributes: position, normal, st, binormal, and tangent.
     *
     * @memberof VertexFormat
     *
     * @see VertexFormat#position
     * @see VertexFormat#normal
     * @see VertexFormat#st
     * @see VertexFormat#binormal
     * @see VertexFormat#tangent
     */
    VertexFormat.ALL = freezeObject(new VertexFormat({
        position : true,
        normal : true,
        st : true,
        binormal : true,
        tangent  : true
    }));

    return VertexFormat;
});