export default `<?xml version="1.0" encoding="UTF-8"?>
<ecore:EPackage xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="core" nsURI="http://informatica.com/mdm/v2/Core" nsPrefix="mdmCore_v2">
  <eClassifiers xsi:type="ecore:EClass" name="TenantModel" eSuperTypes="#//Identifiable">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Tenant model - a top-level package for all the metadata elements of the tenant.&#xD;&#xA;A tenant can only have one model. &#xD;&#xA;Model is automatically updated whenever model elements are added or removed."/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="root" value="true"/>
      <details key="name" value="tenantModel"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
        transient="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Model name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceSystem" upperBound="-1"
        eType="#//SourceSystem" containment="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Systems indicating the source of data for @Entity metadata elements."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="businessEntity" upperBound="-1"
        eType="#//BusinessEntity" containment="true" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Business entities defined in the current model"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="relationshipSet" upperBound="-1"
        eType="#//RelationshipSet" containment="true" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Model relationship namespaces"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="relationship" upperBound="-1"
        eType="#//Relationship" containment="true" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Relationships between BusinessEntity metadata elements defined in the current model"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="configuration" upperBound="-1"
        eType="#//Configuration" containment="true" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Configurations defined in the current model"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="smartFieldTemplate" upperBound="-1"
        eType="#//SmartFieldTemplate" containment="true" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="systemFieldTemplate" upperBound="-1"
        eType="#//SystemFieldTemplate" containment="true" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="reportDataSource" upperBound="-1"
        eType="#//ReportDataSource" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="chart" upperBound="-1"
        eType="#//Chart" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="reportSet" upperBound="-1"
        eType="#//ReportSet" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="uiApplication" upperBound="-1"
        eType="#//UIApplication" containment="true" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="C360 applications defined in the current model"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="uiPage" upperBound="-1"
        eType="#//UIPage" containment="true" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="C360 application pages defined in the current model"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="uiComponent" upperBound="-1"
        eType="#//UIComponent" containment="true" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="C360 application components defined in the current model"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="jobDefinition" upperBound="-1"
        eType="#//JobDefinition" containment="true" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="processTemplate" upperBound="-1"
        eType="#//ProcessTemplate" containment="true" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="businessEvent" upperBound="-1"
        eType="#//BusinessEvent" containment="true" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Business Event"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceRankingTemplate"
        upperBound="-1" eType="#//SourceRankingTemplate" containment="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Source ranking templates defined in the model."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="namespace" upperBound="-1"
        eType="#//Namespace" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="intelligentFileImportMapping"
        upperBound="-1" eType="#//IntelligentFileImportMapping" containment="true"
        eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Intelligent file import mapping configuration."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dynamicPool" upperBound="-1"
        eType="#//DynamicPool" containment="true" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dynamicFieldTemplate" upperBound="-1"
        eType="#//DynamicFieldTemplate" containment="true" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dynamicFieldDefinition"
        upperBound="-1" eType="#//DynamicFieldDefinition" containment="true" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="enrichmentProvider" upperBound="-1"
        eType="#//EnrichmentProvider" containment="true" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="enrichmentProviderMapping"
        upperBound="-1" eType="#//EnrichmentProviderMapping" containment="true" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="enrichmentScenarioGroup"
        upperBound="-1" eType="#//EnrichmentScenarioGroup" containment="true" eKeys="#//Identifiable/guid"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SystemFieldTemplate" eSuperTypes="#//Protected #//NamespaceAware #//Tagged">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" unique="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="description" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://informatica.com/mdm/Core/UI">
        <details key="editMode" value="multiline"/>
        <details key="maxLength" value="255"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="allowedNamespaces" upperBound="-1">
      <eGenericType eClassifier="#//Namespace">
        <eTypeArguments/>
      </eGenericType>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="businessEntityTemplate"
        eType="#//BusinessEntity" containment="true" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Business entities defined in the current model"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="relationshipTemplate" eType="#//Relationship"
        containment="true" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Relationships between BusinessEntity metadata elements defined in the current model"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="NamedFieldSet" abstract="true" eSuperTypes="#//Identifiable #//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="A named set of fields, which also supports inheritance. Please see AbstractEntity or AbstractRelationship."/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/Entity"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="field" upperBound="-1"
        containment="true" eKeys="#//AbstractField/name">
      <eAnnotations source="http://informatica.com/mdm/Core/EntityField"/>
      <eGenericType eClassifier="#//AbstractField">
        <eTypeArguments/>
      </eGenericType>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="storage" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="label" eType="#//LocalizedText"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="sharded" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral=""/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Entity" eSuperTypes="#//NamedFieldSet">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="businessEntity"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="icon" unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://informatica.com/mdm/Core/UI"/>
      <eAnnotations source="http://informatica.com/mdm/Core/File"/>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="description" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://informatica.com/mdm/Core/UI">
        <details key="editMode" value="multiline"/>
        <details key="maxLength" value="255"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="BusinessEntity" eSuperTypes="#//Entity #//FRSAsset #//NamespaceAware">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="businessEntity"/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/PersistenceParameters">
      <details key="collectionNameFeature" value="storage"/>
      <details key="hasPhysicalResources" value="true"/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/ReferenceMode">
      <details key="strict" value="true"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="memberReference" unique="false"
        containment="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Member reference is used to provide a list of Business Entities that are used to define the current Business Entity.&#xD;&#xA;For example, Household Business Entity can be derived from Party Business Entity, which will be its member."/>
      </eAnnotations>
      <eGenericType eClassifier="#//MemberReference">
        <eTypeArguments eClassifier="#//BusinessEntity"/>
      </eGenericType>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="options" unique="false"
        eType="#//BusinessEntityOptions" containment="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Additional system-level meta-data, such as Access paths, Rules and Configurations."/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Relationship" eSuperTypes="#//NamedFieldSet #//NamespaceAware #//FRSAsset">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Unstructured graph relationship."/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/PersistenceParameters">
      <details key="collectionNameFeature" value="storage"/>
      <details key="hasPhysicalResources" value="true"/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="relationship"/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/ReferenceMode">
      <details key="strict" value="true"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="description" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="memberReference" unique="false"
        containment="true">
      <eGenericType eClassifier="#//MemberReference">
        <eTypeArguments eClassifier="#//Relationship"/>
      </eGenericType>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="from" unique="false" lowerBound="1"
        eType="#//BusinessEntityReference" containment="true">
      <eAnnotations source="http://informatica.com/mdm/Core/EntityField">
        <details key="name" value="_from"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="to" unique="false" lowerBound="1"
        eType="#//BusinessEntityReference" containment="true">
      <eAnnotations source="http://informatica.com/mdm/Core/EntityField">
        <details key="name" value="_to"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="options" unique="false"
        eType="#//RelationshipOptions" containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="RelationshipSet" eSuperTypes="#//Protected #//FRSAsset #//NamespaceAware">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Graph Namespace. Relationships must belong to a namespace."/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="relationshipSet"/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/RelationshipSet"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="relationshipSetMember"
        upperBound="-1" eType="#//RelationshipSetMember" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="options" eType="#//RelationshipSetOptions"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="label" eType="#//LocalizedText"
        containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SourceSystem" eSuperTypes="#//Protected #//FRSAsset #//NamespaceAware">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Source system for the master data."/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="sourceSystem"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="description" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="label" eType="#//LocalizedText"
        containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="FieldGroup">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="A compound field, which can contain fields or other compound fields. Compound fields are used as parts of a higher-level meta-data model elements, such as a Business Entity or a Relationship."/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/CompoundFieldReference"/>
    <eAnnotations source="http://informatica.com/mdm/Core/CompoundField"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="field" upperBound="-1"
        containment="true" eKeys="#//AbstractField/name">
      <eGenericType eClassifier="#//AbstractField">
        <eTypeArguments/>
      </eGenericType>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="allowMany" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates a minimum number of instances of the reference within the context of an enclosing object."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="idField" upperBound="-1"
        eKeys="#//AbstractField/name">
      <eGenericType eClassifier="#//AbstractField">
        <eTypeArguments/>
      </eGenericType>
    </eStructuralFeatures>
    <eGenericSuperTypes eClassifier="#//AbstractField">
      <eTypeArguments eClassifier="#//FieldOptions"/>
    </eGenericSuperTypes>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="AbstractField" abstract="true" eSuperTypes="#//Tagged #//AccessPathElement #//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="A particular data field definition. Used to create ModelElement, BusinessEntity, Relationship and other elements that require fields."/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="idField" value="name"/>
      <details key="name" value="field"/>
      <details key="prefixTopLevelParentName" value="true"/>
    </eAnnotations>
    <eTypeParameters name="OPTIONS">
      <eBounds eClassifier="#//FieldOptions"/>
    </eTypeParameters>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
        defaultValueLiteral="">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Field name. Must be unique with the bounds of the enclosing data object definition. Once data objects exist changing the field name is not recommended as it will result in data validation errors."/>
      </eAnnotations>
      <eAnnotations source="http://informatica.com/mdm/Core/UI"/>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="description" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" defaultValueLiteral=""
        unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Field name. Must be unique with the bounds of the enclosing data object definition. Once data objects exist changing the field name is not recommended as it will result in data validation errors."/>
      </eAnnotations>
      <eAnnotations source="http://informatica.com/mdm/Core/UI">
        <details key="multi-line" value="true"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="mandatory" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="When set to false the field value cannot be changed."/>
      </eAnnotations>
      <eAnnotations source="http://informatica.com/mdm/Core/UI">
        <eAnnotations source="http://informatica.com/mdm/Core/UI"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="options" unique="false"
        containment="true">
      <eGenericType eTypeParameter="#//AbstractField/OPTIONS"/>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="label" unique="false" eType="#//LocalizedText"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="smartFieldTemplate" eType="#//SmartFieldTemplate"
        eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="position" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="disabled" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral=""
        unsettable="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="systemField" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral=""
        unsettable="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="applySystemFieldTemplates"
        upperBound="-1" eType="#//SystemFieldTemplate" eKeys="#//Identifiable/guid"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="BusinessEntityReference" eSuperTypes="#//AccessPathElement">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Represents a named reference to a BusinessEntity. By virtue of extending AccessPathElement can be part of a CompositeAccessPath."/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/BusinessEntityReference"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="businessEntity" unique="false"
        lowerBound="1" eType="#//BusinessEntity" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="A reference to an existing BusinessEntity (see AbstractRelationship)."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Name of the field within the context of an enclosing data object (i.e. reference to Customer can be named from)."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="mandatory" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates a minimum number of instances of the reference within the context of an enclosing object."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="role" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
        defaultValueLiteral=""/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CodeField" abstract="true" interface="true"/>
  <eClassifiers xsi:type="ecore:EClass" name="TextField">
    <eAnnotations source="http://informatica.com/mdm/Core/DataField"/>
    <eAnnotations source="http://informatica.com/mdm/Core/DataFieldReference"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="length" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="255"
        unsettable="true">
      <eAnnotations source="http://informatica.com/mdm/Core/UI"/>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="defaultValue" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Default data value for the given field in the context of an enclosing definition (i.e. Party BusinessEntity may have a default prefix set to Mr) ."/>
      </eAnnotations>
      <eAnnotations source="http://informatica.com/mdm/Core/UI">
        <details key="showByDefault" value="false"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="allowMany" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates a minimum number of instances of the reference within the context of an enclosing object."/>
      </eAnnotations>
      <eAnnotations source="http://informatica.com/mdm/Core/UI"/>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isMultiline" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral=""
        unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates whether the field should be multiline."/>
      </eAnnotations>
      <eAnnotations source="http://informatica.com/mdm/Core/UI"/>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="hasDefaultValue" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
    <eGenericSuperTypes eClassifier="#//AbstractField">
      <eTypeArguments eClassifier="#//FieldOptions"/>
    </eGenericSuperTypes>
    <eGenericSuperTypes eClassifier="#//CodeField"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="IntegerField">
    <eAnnotations source="http://informatica.com/mdm/Core/DataField"/>
    <eAnnotations source="http://informatica.com/mdm/Core/DataFieldReference"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="defaultValue" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Default data value for the given field in the context of an enclosing definition (i.e. Party BusinessEntity may have a default prefix set to Mr) ."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="allowMany" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates a minimum number of instances of the reference within the context of an enclosing object."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="hasDefaultValue" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
    <eGenericSuperTypes eClassifier="#//AbstractField">
      <eTypeArguments eClassifier="#//FieldOptions"/>
    </eGenericSuperTypes>
    <eGenericSuperTypes eClassifier="#//CodeField"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DoubleField">
    <eAnnotations source="http://informatica.com/mdm/Core/DataField"/>
    <eAnnotations source="http://informatica.com/mdm/Core/DataFieldReference"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="defaultValue" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDouble" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Default data value for the given field in the context of an enclosing definition (i.e. Party BusinessEntity may have a default prefix set to Mr) ."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="allowMany" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates a minimum number of instances of the reference within the context of an enclosing object."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="hasDefaultValue" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
    <eGenericSuperTypes eClassifier="#//AbstractField">
      <eTypeArguments eClassifier="#//FieldOptions"/>
    </eGenericSuperTypes>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DecimalField">
    <eAnnotations source="http://informatica.com/mdm/Core/DataField"/>
    <eAnnotations source="http://informatica.com/mdm/Core/DataFieldReference"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="defaultValue" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Default data value for the given field in the context of an enclosing definition (i.e. Party BusinessEntity may have a default prefix set to Mr) ."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="precision" unique="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"
        defaultValueLiteral="34" unsettable="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="scale" unique="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="0"
        unsettable="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="allowMany" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates a minimum number of instances of the reference within the context of an enclosing object."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="hasDefaultValue" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
    <eGenericSuperTypes eClassifier="#//AbstractField">
      <eTypeArguments eClassifier="#//FieldOptions"/>
    </eGenericSuperTypes>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="BooleanField">
    <eAnnotations source="http://informatica.com/mdm/Core/DataField"/>
    <eAnnotations source="http://informatica.com/mdm/Core/DataFieldReference"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="defaultValue" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Default data value for the given field in the context of an enclosing definition (i.e. Party BusinessEntity may have a default prefix set to Mr) ."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="hasDefaultValue" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
    <eGenericSuperTypes eClassifier="#//AbstractField">
      <eTypeArguments eClassifier="#//FieldOptions"/>
    </eGenericSuperTypes>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DateTimeField">
    <eAnnotations source="http://informatica.com/mdm/Core/DataField"/>
    <eAnnotations source="http://informatica.com/mdm/Core/DataFieldReference"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="defaultValue" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDate" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Default data value for the given field in the context of an enclosing definition (i.e. Party BusinessEntity may have a default prefix set to Mr) ."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="allowMany" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates a minimum number of instances of the reference within the context of an enclosing object."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="hasDefaultValue" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
    <eGenericSuperTypes eClassifier="#//AbstractField">
      <eTypeArguments eClassifier="#//FieldOptions"/>
    </eGenericSuperTypes>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DateField">
    <eAnnotations source="http://informatica.com/mdm/Core/DataField"/>
    <eAnnotations source="http://informatica.com/mdm/Core/DataFieldReference"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="defaultValue" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Default data value for the given field in the context of an enclosing definition (i.e. Party BusinessEntity may have a default prefix set to Mr) ."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="allowMany" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates a minimum number of instances of the reference within the context of an enclosing object."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="hasDefaultValue" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
    <eGenericSuperTypes eClassifier="#//AbstractField">
      <eTypeArguments eClassifier="#//FieldOptions"/>
    </eGenericSuperTypes>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="LookupField">
    <eAnnotations source="http://informatica.com/mdm/Core/LookupField"/>
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Lookup field definition. Defines a field that represents a lookup."/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="codeField" unique="false"
        lowerBound="1" eType="#//CodeField" resolveProxies="false">
      <eAnnotations source="http://informatica.com/mdm/Core/EntityField">
        <details key="propertyName" value="_code"/>
      </eAnnotations>
      <eAnnotations source="http://informatica.com/mdm/Core/Reference">
        <details key="crossReferenceAllowed" value="true"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="extraField" upperBound="-1"
        eType="#//LookupExtraField" containment="true">
      <eAnnotations source="http://informatica.com/mdm/Core/EntityField"/>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="masterField" unique="false"
        upperBound="-1" eType="#//LookupField" eKeys="#//AbstractField/name"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="defaultValue" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Default data value for the given field in the context of an enclosing definition (i.e. Party BusinessEntity may have a default prefix set to Mr) ."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="allowMany" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates a minimum number of instances of the reference within the context of an enclosing object."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="hasDefaultValue" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
    <eGenericSuperTypes eClassifier="#//AbstractField">
      <eTypeArguments eClassifier="#//LookupFieldOptions"/>
    </eGenericSuperTypes>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="LookupExtraField" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EReference" name="field" lowerBound="1" eKeys="#//AbstractField/name">
      <eAnnotations source="http://informatica.com/mdm/Core/Reference">
        <details key="crossReferenceAllowed" value="true"/>
      </eAnnotations>
      <eGenericType eClassifier="#//AbstractField">
        <eTypeArguments eClassifier="#//FieldOptions"/>
      </eGenericType>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="displayable" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="consumable" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Meta">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Meta-data specific to a particular meta-model element or a data object (see AbstractEntityMeta). Used to record creation and modification times and users for meta-data and data objects"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="creationDate" unique="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDate"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="lastUpdatedDate" unique="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDate"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="createdByUser" ordered="false"
        unique="false" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="lastUpdatedByUser" ordered="false"
        unique="false" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="version" unique="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="For data model elements this will be the current metamodel version;&#xD;&#xA;For data elements this is the the metamodel version that the current data object complies with."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="deletionDate" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDate"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="deletedByUser" ordered="false"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="references" upperBound="-1"
        eType="#//MetadataReference" containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CompositeAccessPath" eSuperTypes="#//Protected #//Identifiable">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="A composite access path defines a way to get to a data object based on a particular access path criteria &#xD;&#xA;and enables use of indexes in the underlying data store.&#xD;&#xA;For example, if we need to be able to retrieve a product based on SKU and model number we could define a composite access path consisting of SKU and modelNumber fields.&#xD;&#xA;Model elements that implement AccessPathElement interface can participate in a CompositeAccessPath."/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="accessPath" lowerBound="1"
        upperBound="-1" eType="#//AccessPath" containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="AccessPathElement" abstract="true" interface="true"
      eSuperTypes="#//Protected"/>
  <eClassifiers xsi:type="ecore:EClass" name="SourceLookup">
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceSystem" lowerBound="1"
        eType="#//SourceSystem" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="lookupType" unique="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="LookupFieldOptions" eSuperTypes="#//FieldOptions">
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceLookup" upperBound="-1"
        eType="#//SourceLookup" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="expiration" eType="#//LookupFieldOptionExpiration"
        defaultValueLiteral="NEVER"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="MemberReference" eSuperTypes="#//Protected">
    <eTypeParameters name="MEMBER"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="member" lowerBound="1">
      <eGenericType eTypeParameter="#//MemberReference/MEMBER"/>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="transformationConfiguration"
        eType="#//ShapeTransformationConfiguration" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="memberConfiguration" eType="#//MemberConfiguration"
        containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="MemberConfiguration" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="propagateChanges" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="true"
        unsettable="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="acceptNewAsUnique" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
        defaultValueLiteral="false"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CrosswalkConfiguration">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="crosswalkConfiguration"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="codeListMap" lowerBound="1"
        upperBound="-1" eType="#//CodeListMap" containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CodeListMap" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceSystem" lowerBound="1"
        eType="#//SourceSystem" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="picklist" lowerBound="1"
        eType="#//LookupField"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="codelist" lowerBound="1"
        eType="#//BusinessEntity" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="downgradeTrustScorePercentage"
        ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDouble"
        defaultValueLiteral="100"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ShapeTransformationConfiguration"/>
  <eClassifiers xsi:type="ecore:EClass" name="Configuration" abstract="true" eSuperTypes="#//Protected #//NamespaceAware">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Base class for configurations.&#xD;&#xA;Configurations include Rules, Server Configurations etc."/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="RelationshipSetMember">
    <eStructuralFeatures xsi:type="ecore:EReference" name="relationship" lowerBound="1"
        eType="#//Relationship" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="filter" upperBound="-1"
        eType="#//FieldFilter" containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="FieldFilter">
    <eStructuralFeatures xsi:type="ecore:EReference" name="field" lowerBound="1" eKeys="#//AbstractField/name">
      <eGenericType eClassifier="#//AbstractField">
        <eTypeArguments/>
      </eGenericType>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="value" unique="false" lowerBound="1"
        upperBound="-1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="EntityOptions" abstract="true" eSuperTypes="#//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="System-level options for BusinessEntities and Relationships"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="compositeAccessPath" upperBound="-1"
        eType="#//CompositeAccessPath" containment="true" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="extendedConfiguration"
        upperBound="-1" eType="#//Configuration" containment="true" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Extended Business Entity configuration"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="historyConfiguration" eType="#//HistoryConfiguration"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="stateManagementConfiguration"
        eType="#//StateManagementConfiguration" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="validationConfiguration"
        eType="#//ValidationConfiguration" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="fileImportMappingConfiguration"
        eType="#//FileImportMappingConfiguration" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="versioningConfiguration"
        eType="#//VersioningConfiguration" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="survivorshipConfiguration"
        eType="#//SurvivorshipConfiguration" containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="BusinessEntityOptions" eSuperTypes="#//EntityOptions">
    <eStructuralFeatures xsi:type="ecore:EReference" name="uiConfiguration" eType="#//BusinessEntityUIConfiguration"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="searchConfiguration" eType="#//BusinessEntitySearchConfiguration"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="matchConfiguration" eType="#//BusinessEntityMatchConfiguration"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="xrefMemberConfiguration"
        eType="#//MemberConfiguration" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="crosswalkConfiguration"
        eType="#//CrosswalkConfiguration" containment="true" eKeys="#//Identifiable/guid"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="RelationshipConfiguration"/>
  <eClassifiers xsi:type="ecore:EClass" name="RelationshipOptions" eSuperTypes="#//EntityOptions">
    <eStructuralFeatures xsi:type="ecore:EReference" name="relationshipConfiguration"
        eType="#//RelationshipConfiguration" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="matchConfiguration" eType="#//MatchConfiguration"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="uiConfiguration" eType="#//RelationshipUIConfiguration"
        containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ValidationConfiguration" eSuperTypes="#//Protected"/>
  <eClassifiers xsi:type="ecore:EClass" name="FileImportMappingConfiguration" eSuperTypes="#//Protected"/>
  <eClassifiers xsi:type="ecore:EClass" name="IntelligentFileImportMapping" eSuperTypes="#//Identifiable"/>
  <eClassifiers xsi:type="ecore:EClass" name="SurvivorshipConfiguration">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="survivorshipConfiguration"/>
      <details key="prefixTopLevelParentName" value="false"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceRanking" eType="#//SourceRanking"
        containment="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/Deprecated"/>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="optionalRules" upperBound="-1"
        eType="#//AbstractOptionalSurvivorshipRule" containment="true" eKeys="#//AbstractOptionalSurvivorshipRule/ruleNo"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceRankingTemplate"
        eType="#//SourceRankingTemplate"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="surviveAsBlock" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral=""
        unsettable="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SurvivorshipRule" abstract="true">
    <eStructuralFeatures xsi:type="ecore:EReference" name="parameters" upperBound="-1"
        eType="#//SurvivorshipRuleParameter"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="AbstractOptionalSurvivorshipRule" abstract="true"
      eSuperTypes="#//SurvivorshipRule">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="ruleNo" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="0"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SurvivorshipRuleParameter">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="value" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SourceRanking" eSuperTypes="#//SurvivorshipRule">
    <eStructuralFeatures xsi:type="ecore:EReference" name="ranks" upperBound="-1"
        eType="#//SourceRank" containment="true" eKeys="#//SourceRank/rank"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SourceRank">
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceSystem" lowerBound="1"
        eType="#//SourceSystem" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="rank" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"
        defaultValueLiteral="0"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Decay" eSuperTypes="#//AbstractOptionalSurvivorshipRule">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="maxts" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDouble"
        defaultValueLiteral="1"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="mints" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDouble"
        defaultValueLiteral="0"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="dtu" lowerBound="1" eType="#//DecayTimeUnit"
        defaultValueLiteral="year"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="dtp" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"
        defaultValueLiteral="1000"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="gt" lowerBound="1" eType="#//DecayGraphType"
        defaultValueLiteral="linear"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceSystem" eType="#//SourceSystem"
        eKeys="#//Identifiable/guid"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="LastUpdated" eSuperTypes="#//Decay"/>
  <eClassifiers xsi:type="ecore:EClass" name="ReverseDecay" eSuperTypes="#//Decay"/>
  <eClassifiers xsi:type="ecore:EEnum" name="DecayTimeUnit">
    <eLiterals name="second"/>
    <eLiterals name="hour" value="1"/>
    <eLiterals name="day" value="2"/>
    <eLiterals name="week" value="3"/>
    <eLiterals name="month" value="4"/>
    <eLiterals name="quarter" value="5"/>
    <eLiterals name="year" value="6"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="DecayGraphType">
    <eLiterals name="linear"/>
    <eLiterals name="risl" value="1"/>
    <eLiterals name="sirl" value="2"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="MostConsistent" eSuperTypes="#//AbstractOptionalSurvivorshipRule"/>
  <eClassifiers xsi:type="ecore:EClass" name="MostFrequent" eSuperTypes="#//AbstractOptionalSurvivorshipRule"/>
  <eClassifiers xsi:type="ecore:EClass" name="SetBased" eSuperTypes="#//AbstractOptionalSurvivorshipRule"/>
  <eClassifiers xsi:type="ecore:EClass" name="VersioningConfiguration" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="versioningEnabled" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
        defaultValueLiteral="false"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="StateManagementConfiguration" eSuperTypes="#//Protected"/>
  <eClassifiers xsi:type="ecore:EClass" name="Identifiable" abstract="true" eSuperTypes="#//Tagged #//MetaHolder">
    <eAnnotations source="http://informatica.com/mdm/Core/Identifiable"/>
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="idField" value="guid"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="guid" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
        iD="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="_meta" eType="#//Meta"
        containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="BusinessEntityMatchConfiguration" eSuperTypes="#//MatchConfiguration">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="businessEntityMatchConfiguration"/>
      <details key="prefixTopLevelParentName" value="true"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="BusinessEntitySearchConfiguration" eSuperTypes="#//Protected">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="businessEntitySearchConfiguration"/>
      <details key="prefixTopLevelParentName" value="true"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="searchField" upperBound="-1"
        eType="#//SearchField" containment="true" eKeys="#//SearchField/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="searchConfiguration" eType="#//SearchConfiguration"
        containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SearchField" eSuperTypes="#//Protected #//AccessPathElement #//MetaHolder">
    <eStructuralFeatures xsi:type="ecore:EReference" name="accessPath" lowerBound="1"
        eType="#//AccessPath" containment="true" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="guid" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="_meta" eType="#//Meta"
        containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SearchConfiguration" abstract="true"
      eSuperTypes="#//Protected"/>
  <eClassifiers xsi:type="ecore:EClass" name="MatchConfiguration" eSuperTypes="#//Protected"/>
  <eClassifiers xsi:type="ecore:EClass" name="MetaHolder" abstract="true" interface="true">
    <eOperations name="get_meta" eType="#//Meta"/>
    <eOperations name="set_meta">
      <eParameters name="meta" eType="#//Meta"/>
    </eOperations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="HistoryConfiguration" eSuperTypes="#//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="BusinessEntity History Configuration"/>
    </eAnnotations>
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="historyConfiguration"/>
      <details key="prefixTopLevelParentName" value="true"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="disabled" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="BusinessEntityUIConfiguration" eSuperTypes="#//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Business Entity UI configuration, such as Entity description, UI layouts, etc."/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="descriptionTemplate" upperBound="-1"
        eKeys="#//AbstractField/name">
      <eGenericType eClassifier="#//AbstractField">
        <eTypeArguments eClassifier="#//FieldOptions"/>
      </eGenericType>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="FieldUIConfiguration" eSuperTypes="#//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Field UI configuration, such as field description"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="label" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="primary" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UniquenessConfiguration">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="field group uniqueness configuration"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="exactFields" upperBound="-1"
        eKeys="#//AbstractField/name">
      <eGenericType eClassifier="#//AbstractField">
        <eTypeArguments eClassifier="#//FieldOptions"/>
      </eGenericType>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="FieldOptions" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EReference" name="uiConfiguration" eType="#//FieldUIConfiguration"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="survivorshipConfiguration"
        eType="#//SurvivorshipConfiguration" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="validationConfiguration"
        eType="#//ValidationConfiguration" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="uniquenessConfiguration"
        eType="#//UniquenessConfiguration" containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="AccessPath" eSuperTypes="#//Protected #//Identifiable">
    <eStructuralFeatures xsi:type="ecore:EReference" name="pathElements" lowerBound="1"
        upperBound="-1" eType="#//AccessPathElement"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Tagged" abstract="true" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="tag" unique="false" upperBound="-1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="LocalizedText">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="en" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="fr" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="ja" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="de" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="es" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="pt" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SmartFieldTemplate" eSuperTypes="#//Protected #//NamespaceAware">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="icon" unique="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://informatica.com/mdm/Core/UI"/>
      <eAnnotations source="http://informatica.com/mdm/Core/File"/>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="description" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" defaultValueLiteral=""
        unsettable="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Field name. Must be unique with the bounds of the enclosing data object definition. Once data objects exist changing the field name is not recommended as it will result in data validation errors."/>
      </eAnnotations>
      <eAnnotations source="http://informatica.com/mdm/Core/UI">
        <details key="multi-line" value="true"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="label" unique="false" lowerBound="1"
        eType="#//LocalizedText" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="field" unique="false" lowerBound="1"
        containment="true" eKeys="#//AbstractField/name">
      <eGenericType eClassifier="#//AbstractField">
        <eTypeArguments/>
      </eGenericType>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="configuration" upperBound="-1"
        eType="#//Configuration" containment="true" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Extended Business Entity configuration"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Protected" abstract="true">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="ownerRole" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="MetadataReference">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="referencePath" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="elementPath" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="FRSAsset" abstract="true" interface="true">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="frsID" unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="FRSAssetReference">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="frsID" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CAIFlowReference" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="frsID" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIApplication" eSuperTypes="#//Protected #//FRSAsset #//NamespaceAware">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="uiApplication"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="description" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="label" eType="#//LocalizedText"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="headerConfig" unique="false"
        eType="#//UIAppHeaderConfig" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="uiRelationshipSet" upperBound="-1"
        eType="#//RelationshipSetReference" containment="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="List of relationshipSet that is included as part of the application model. "/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="allowedRoles" upperBound="-1"
        eType="#//UIAppRole" containment="true" eKeys="#//UIAppRole/name"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceSystem" upperBound="-1"
        eType="#//SourceSystem" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="businessEntities" upperBound="-1"
        eType="#//UIAppEntityReference" containment="true">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="List of entities that is included as part of the application model. For example, person and organization."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="fieldRef" upperBound="-1"
        eType="#//UIFieldReference" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="routes" upperBound="-1"
        eType="#//UIAppRoute" containment="true" eKeys="#//UIAppRoute/name"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="search" eType="#//UIAppSearchConfig"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="content" upperBound="-1"
        eType="#//MapEntry" containment="true" eKeys="#//MapEntry/key"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="chartConfig" eType="#//ChartConfiguration"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="similarRecordConfig" eType="#//UIAppSimilarRecordConfig"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="reportSet" eType="#//ReportSet"
        eKeys="#//Identifiable/guid"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIPage" eSuperTypes="#//Protected #//FRSAsset #//NamespaceAware">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="uiPage"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="description" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="pageType" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="content" upperBound="-1"
        eType="#//MapEntry" containment="true" eKeys="#//MapEntry/key"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="entity" eType="#//BusinessEntity"
        eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="fieldRef" upperBound="-1"
        eType="#//UIFieldReference" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="localizedContent" upperBound="-1"
        eType="#//UILocalizedText" containment="true" eKeys="#//UILocalizedText/path"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIComponent" eSuperTypes="#//Protected #//FRSAsset #//NamespaceAware">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="uiComponent"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="description" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="componentType" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="content" upperBound="-1"
        eType="#//MapEntry" containment="true" eKeys="#//MapEntry/key"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="entity" eType="#//BusinessEntity"
        eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="fieldRef" upperBound="-1"
        eType="#//UIFieldReference" containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIPageReference" eSuperTypes="#//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Reference to a Page element with optional ACL and appliesTo BusinessEntity context."/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="page" lowerBound="1" eType="#//UIPage"
        eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="appliesToBusinessEntity"
        unique="false" eType="#//BusinessEntity" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="allowedRoles" upperBound="-1"
        eType="#//UIAppRole" containment="true" eKeys="#//UIAppRole/name"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="active" ordered="false"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="order" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIAppEntityReference" eSuperTypes="#//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Reference to a BusinessEntity that will be used with the application."/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="entity" lowerBound="1"
        eType="#//BusinessEntity" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="fieldsForDisplay" upperBound="-1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIFieldReference" eSuperTypes="#//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Reference to a BusinessEntity that will be used with the application."/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="entity" lowerBound="1"
        eType="#//BusinessEntity" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="fields" upperBound="-1">
      <eGenericType eClassifier="#//AbstractField">
        <eTypeArguments eClassifier="#//FieldOptions"/>
      </eGenericType>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="RelationshipSetReference" eSuperTypes="#//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Reference to a relationshipSet that will be used with the application."/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="relationshipSet" lowerBound="1"
        eType="#//RelationshipSet" eKeys="#//Identifiable/guid"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="MapEntry" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="key" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://informatica.com/mdm/Core/UI">
        <details key="editMode" value="multiline"/>
        <details key="maxLength" value="255"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="value" unique="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://informatica.com/mdm/Core/UI">
        <details key="editMode" value="multiline"/>
        <details key="maxLength" value="255"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIAppHeaderConfig" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="globalSearchEnabled" ordered="false"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates if the global search should be shown in the UI header"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="appSwitcherEnabled" ordered="false"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates if the Business UI app switcher should be available in the UI header"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="iicsSwitcherEnabled" ordered="false"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates if the IICS product switcher should be available in the UI header"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="orgSwitcherEnabled" ordered="false"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates if the IICS org / sub-org switcher should be available in the UI header"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="notificationEnabled" ordered="false"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates if the IICS notifications should be enabled"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="userProfileEnabled" ordered="false"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Indicates if the IICS user profile should be made accessible and visible"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="helpUri" ordered="false"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Help documentation URI."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="image" ordered="false"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Header image URI or base64 content"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIAppRole" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations>
        <details key="documentation" value="Role name in ACL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations>
        <details key="documentation" value="A unique id of role in given identity provider."/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIAppRoute" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations>
        <details key="documentation" value="Application route name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="label" ordered="false"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
        defaultValueLiteral="en-us">
      <eAnnotations>
        <details key="documentation" value="Navigational tab label."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="icon" ordered="false" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" defaultValueLiteral="en-us">
      <eAnnotations>
        <details key="documentation" value="Application route icon uri or base64 data content."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="path" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" defaultValueLiteral="en-us">
      <eAnnotations>
        <details key="documentation" value="Route path"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="type" ordered="false" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" defaultValueLiteral="en-us">
      <eAnnotations>
        <details key="documentation" value="Route type - either static, record or create"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="hideIfNotAllowed" ordered="false"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="allowedRoles" upperBound="-1"
        eType="#//UIAppRole" containment="true" eKeys="#//UIAppRole/name"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="pageRef" ordered="false"
        upperBound="-1" eType="#//UIPageReference" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isActive" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="false">
      <eAnnotations>
        <details key="documentation" value="Used for Workspace display"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIAppSearchConfig" eSuperTypes="#//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Captures general search configuration and layout details"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="searchPageSize" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Number items to display per page."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="autoSuggestEnabled" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Enables autosuggest as you type in search query."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="autoSuggestMinCharToStartFrom"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Number of characters that need to be typed before initiating autosuggest."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="autoSuggestMaxSuggestions"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Maximum number of autosuugest items to show."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="searchHistoryEnabled" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Enables capturing recent search queries"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="searchHistoryMaxEntries"
        unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Maximum number of items to retain in recent search items history."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="enableXrefSearch" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value=""/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="dateTimeFormat" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Datetime format."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="dateFormat" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Datetime format."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="timeFormat" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Datetime format."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="layouts" upperBound="-1"
        eType="#//UIAppSearchLayout" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="filters" upperBound="-1"
        eType="#//UIAppSearchFilter" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="actionMenu" upperBound="-1"
        eType="#//UIAppSearchActionMenu" containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIAppSearchLayout" eSuperTypes="#//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Describes various layout configurations on a per entity basis."/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="businessEntity" lowerBound="1"
        eType="#//BusinessEntity" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Business entity"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="viewLayouts" upperBound="-1"
        eType="#//MapEntry" containment="true" eKeys="#//MapEntry/key"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="order" unique="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="allowedRoles" upperBound="-1"
        eType="#//UIAppRole" containment="true" eKeys="#//UIAppRole/name"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="component" eType="#//UIComponent"
        eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="C360 application components defined in the current model"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="primaryFacets" eType="#//UIAppSearchFacet"
        containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="LookupFieldOptionExpiration">
    <eLiterals name="NEVER"/>
    <eLiterals name="IMMEDIATELY" value="1"/>
    <eLiterals name="ALWAYS" value="2"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="JobDefinition" eSuperTypes="#//FRSAsset #//NamespaceAware #//Protected">
    <eAnnotations source="http://informatica.com/mdm/Core/JobDefinition"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="description" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="processTemplate" lowerBound="1"
        eType="#//ProcessTemplate" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="caiProcess" lowerBound="1"
        eType="#//CAIFlowReference" containment="true" eKeys="#//CAIFlowReference/name"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="flowMetadataRefParameters"
        upperBound="-1" eType="#//ProcesstemplateMetdataRefParameter" containment="true"
        eKeys="#//ProcesstemplateMetdataRefParameter/name"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="flowFrsRefParameters" upperBound="-1"
        eType="#//ProcesstemplateFrsRefParameter" containment="true" eKeys="#//ProcesstemplateFrsRefParameter/name"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="parameters" upperBound="-1"
        eType="#//JobDefinitionParameter" containment="true" eKeys="#//JobDefinitionParameter/name"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isActive" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
        defaultValueLiteral="false"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceSystem" eType="#//SourceSystem"
        eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="jobType" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="caiProcessAddress" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="targetEntities" upperBound="-1"
        eType="#//TargetEntity" containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="TargetEntity" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EReference" name="entityGuid" lowerBound="1"
        eType="#//NamedFieldSet" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="entityType" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="JobDefinitionParameter" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="value" unique="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="type" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="BusinessEvent" abstract="true" eSuperTypes="#//FRSAsset #//NamespaceAware">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="businessEvent"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ProcesstemplateMetdataRef" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EReference" name="entityGuid" lowerBound="1"
        eType="#//Identifiable" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ProcesstemplateMetdataRefParameter"
      eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="value" upperBound="-1"
        eType="#//ProcesstemplateMetdataRef" containment="true" eKeys="#//ProcesstemplateMetdataRef/name"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ProcesstemplateFrsRefParameter" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="value" upperBound="-1"
        eType="#//CAIFlowReference" containment="true" eKeys="#//CAIFlowReference/name"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ProcessFlowParameter" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="type" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="lowerBound" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="upperBound" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ProcessFlowRefParameter" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="assetName" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="lowerBound" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="upperBound" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isMetadataObject" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ProcessTemplate" eSuperTypes="#//NamespaceAware #//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="parameters" upperBound="-1"
        eType="#//JobDefinitionParameter" containment="true" eKeys="#//JobDefinitionParameter/name"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="linkedCAIFlows" upperBound="-1"
        eType="#//CAIFlowReference" containment="true" eKeys="#//CAIFlowReference/name"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inputReferences" upperBound="-1"
        eType="#//ProcessFlowRefParameter" containment="true" eKeys="#//ProcessFlowRefParameter/name"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inputParameters" upperBound="-1"
        eType="#//ProcessFlowParameter" containment="true" eKeys="#//ProcessFlowParameter/name"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outputParameters" upperBound="-1"
        eType="#//ProcessFlowParameter" containment="true" eKeys="#//ProcessFlowParameter/name"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SourceRankingTemplate" eSuperTypes="#//NamespaceAware">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="sourceRankingTemplate"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="label" lowerBound="1" eType="#//LocalizedText"
        containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceRanking" lowerBound="1"
        eType="#//SourceRanking" containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Namespace" eSuperTypes="#//Identifiable #//FRSAsset #//Protected">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" unique="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="description" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://informatica.com/mdm/Core/UI">
        <details key="editMode" value="multiline"/>
        <details key="maxLength" value="255"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="parent" eType="#//Namespace"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="prefix" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
        unsettable="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="NamespaceAware" abstract="true" eSuperTypes="#//Identifiable">
    <eStructuralFeatures xsi:type="ecore:EReference" name="namespace" eType="#//Namespace"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Chart" abstract="true" eSuperTypes="#//FRSAsset #//Protected #//NamespaceAware"/>
  <eClassifiers xsi:type="ecore:EClass" name="ReportDataSource" abstract="true" eSuperTypes="#//Protected #//NamespaceAware">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="reportDataSource"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ChartConfiguration" abstract="true"
      eSuperTypes="#//Protected"/>
  <eClassifiers xsi:type="ecore:EClass" name="RelationshipUIConfiguration" eSuperTypes="#//Protected">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Relationship UI configuration, such as direction, etc."/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="direction" eType="#//RelationshipDirection"
        defaultValueLiteral="FORWARD"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="RelationshipDirection">
    <eLiterals name="FORWARD">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="(from --> to) aka 'Entity 1 to Entity 2'"/>
      </eAnnotations>
    </eLiterals>
    <eLiterals name="BACKWARD" value="1">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="(from &lt;-- to) aka 'Entity 2 to Entity 1'"/>
      </eAnnotations>
    </eLiterals>
    <eLiterals name="UNDIRECTED" value="2">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="(from --- to) aka 'Undirected'"/>
      </eAnnotations>
    </eLiterals>
    <eLiterals name="BIDIRECTED" value="3">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="(from &lt;--> to) aka 'Bi-directional'"/>
      </eAnnotations>
    </eLiterals>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="RelationshipSetSearchConfiguration"
      eSuperTypes="#//Protected">
    <eAnnotations source="http://informatica.com/mdm/Core/API">
      <details key="name" value="relationshipSetSearchConfiguration"/>
      <details key="prefixTopLevelParentName" value="true"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="RelationshipSetOptions" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EReference" name="searchConfiguration" eType="#//RelationshipSetSearchConfiguration"
        containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIAppSearchFilter" eSuperTypes="#//Protected">
    <eStructuralFeatures xsi:type="ecore:EReference" name="allowedRoles" upperBound="-1"
        eType="#//UIAppRole" containment="true" eKeys="#//UIAppRole/name"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="businessEntities" upperBound="-1"
        eType="#//BusinessEntity" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="List of entities that is included as part of the application model. For example, person and organization."/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="filterLayout" lowerBound="1"
        eType="#//MapEntry" containment="true" eKeys="#//MapEntry/key"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIAppSimilarRecordConfig">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="enableSimilarRecords" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIAppSearchActionMenu">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Describes various action menu configurations on entity basis."/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="businessEntities" upperBound="-1"
        eType="#//BusinessEntity" eKeys="#//Identifiable/guid">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Business entity"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="actionId" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" iD="true">
      <eAnnotations source="http://informatica.com/mdm/Core/UI">
        <details key="editMode" value="multiline"/>
        <details key="maxLength" value="255"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="label" unique="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http://informatica.com/mdm/Core/UI">
        <details key="editMode" value="multiline"/>
        <details key="maxLength" value="255"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="multiselect" unique="false"
        lowerBound="1" eType="#//ActionMultiselect">
      <eAnnotations source="http://informatica.com/mdm/Core/UI">
        <details key="editMode" value="multiline"/>
        <details key="maxLength" value="255"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="ActionMultiselect">
    <eLiterals name="SAME" literal="SAME"/>
    <eLiterals name="MIXED" value="1" literal="MIXED"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UIAppSearchFacet" eSuperTypes="#//Protected #//AccessPathElement">
    <eStructuralFeatures xsi:type="ecore:EReference" name="searchFieldRef" upperBound="-1"
        eType="#//SearchField" eKeys="#//SearchField/guid"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DynamicPool" eSuperTypes="#//Identifiable #//NamespaceAware">
    <eStructuralFeatures xsi:type="ecore:EReference" name="label" unique="false" eType="#//LocalizedText"
        containment="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DynamicFieldTemplateFolder" eSuperTypes="#//Identifiable #//NamespaceAware">
    <eStructuralFeatures xsi:type="ecore:EReference" name="dynamicPool" unique="false"
        lowerBound="1" eType="#//DynamicPool" eKeys="#//Identifiable/guid"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DynamicFieldTemplate" eSuperTypes="#//Identifiable #//NamespaceAware">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="identifier" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="folder" unique="false"
        eType="#//DynamicFieldTemplateFolder" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dynamicPool" unique="false"
        lowerBound="1" eType="#//DynamicPool" eKeys="#//Identifiable/guid"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="field" lowerBound="1" containment="true"
        eKeys="#//AbstractField/name">
      <eGenericType eClassifier="#//AbstractField">
        <eTypeArguments/>
      </eGenericType>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DynamicFieldDefinition" eSuperTypes="#//Identifiable #//NamespaceAware">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="mandatory" unique="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
        defaultValueLiteral="" unsettable="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="allowMany" unique="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
        unsettable="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dynamicFieldTemplate" unique="false"
        lowerBound="1" eType="#//DynamicFieldTemplate" eKeys="#//Identifiable/guid"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DynamicField">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="allowMany" unique="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="true"
        unsettable="true"/>
    <eGenericSuperTypes eClassifier="#//AbstractField">
      <eTypeArguments/>
    </eGenericSuperTypes>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DynamicFieldValueContainer">
    <eStructuralFeatures xsi:type="ecore:EReference" name="dynamicFieldProvider" lowerBound="1"
        eType="#//DynamicField">
      <eAnnotations source="http://informatica.com/mdm/Core/EntityField"/>
      <eAnnotations source="http://informatica.com/mdm/Core/Reference">
        <details key="crossReferenceAllowed" value="true"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eGenericSuperTypes eClassifier="#//AbstractField">
      <eTypeArguments/>
    </eGenericSuperTypes>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ReportSet" abstract="true" eSuperTypes="#//FRSAsset #//Protected #//NamespaceAware"/>
  <eClassifiers xsi:type="ecore:EClass" name="Language">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="code" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="TranslationConfiguration" eSuperTypes="#//Configuration">
    <eStructuralFeatures xsi:type="ecore:EReference" name="language" lowerBound="1"
        upperBound="-1" eType="#//Language" containment="true" eKeys="#//Language/code"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="defaultLanguage" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="EnrichmentProviderMapping" abstract="true"
      eSuperTypes="#//FRSAsset #//Protected #//NamespaceAware"/>
  <eClassifiers xsi:type="ecore:EClass" name="EnrichmentProvider" abstract="true"
      eSuperTypes="#//FRSAsset #//Protected #//NamespaceAware"/>
  <eClassifiers xsi:type="ecore:EClass" name="EnrichmentScenarioGroup" abstract="true"
      eSuperTypes="#//FRSAsset #//Protected #//NamespaceAware"/>
  <eClassifiers xsi:type="ecore:EClass" name="EnrichmentFrameworkGlobalConfiguration"
      abstract="true" eSuperTypes="#//Configuration"/>
  <eClassifiers xsi:type="ecore:EClass" name="UILocalizedText">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="path" lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="content" lowerBound="1"
        eType="#//LocalizedText" containment="true"/>
  </eClassifiers>
</ecore:EPackage>`